const STATES = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}

class CustomPromise {
    _state = STATES.PENDING
    _result = undefined
    _fnResolve = this._resolve.bind(this)
    _fnReject = this._reject.bind(this)
    _thenCallbacks = []
    _catchCallbacks = []

    constructor(executor) {
        try {
            executor(this._fnResolve, this._fnReject)
        } catch(e) {
            this.catch(e)
        }
        
    }

    _resolve(value) {
        setTimeout(() => this._exec(value, 'resolve'), 0)
    }

    _reject(value) {
        setTimeout(() => this._exec(value, 'reject'), 0)
    }

    _exec(value, cbName) {
        if (!this._isPending()) return

        if (value instanceof CustomPromise) {
            value.then(this._fnResolve, this._fnReject)
            return
        }
        
        if (cbName === 'resolve') {
            this._state = STATES.FULFILLED
        } else {
            this._state = STATES.REJECTED
        }

        this._result = value
        this._runCallbacks()
    }

    _isPending() { return this._state === STATES.PENDING }

    _runCallbacks() {
        if (this._state === STATES.FULFILLED) {
            this._thenCallbacks.forEach((cb) => {
                cb(this._result)
            })
            
            this._thenCallbacks = []
        }

        if (this._state === STATES.REJECTED) {
            this._catchCallbacks.forEach((cb) => {
                cb(this._result)
            })

            this._catchCallbacks = []
        }
    }

    then(onfulfilled, onrejected) {
        return new CustomPromise((resolve, reject) => {
            this._thenCallbacks.push(result => {
                if (onfulfilled == null) {
                    resolve(result)
                    return
                }

                try {
                    resolve(onfulfilled(result))
                } catch (error) {
                    reject(error)
                }
            })

            this._catchCallbacks.push(result => {
                if (onrejected == null) {
                    reject(result)
                    return
                }

                try {
                    resolve(onrejected(result))
                } catch (error) {
                    reject(error)
                }
            })
    
            this._runCallbacks()
        })
    }

    catch(reason) {
        this.then(null, reason)
    }

    finally(onfinally) {
        return this.then(result => {
            onfinally()
            return result
        }, result => {
            onfinally()
            throw result
        })
    }

    static resolve(value) {
        return new CustomPromise(resolve => resolve(value))
    }

    static reject(value) {
        return new CustomPromise((resolve, reject) => reject(value))
    }
}

let p = new CustomPromise(
    (resolve, reject) => {
        resolve(1)
    }
)
p.then((value) => value + 1).then((value) => console.log(value))