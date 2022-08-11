class CustomPromise {
    constructor(executor) {
        executor.bind(this, this.resolve, this.reject)
        setTimeout(executor, 0)
    }

    _state = 'pending'
    _result = undefined

    resolve(result) {
        if (this._isPending()) {
            this._state = 'fulfilled'
            this._result = result

            return this
        }
    }

    reject(error) {
        if (this._isPending()) {
            this._state = 'rejected'

            return this
        }
    }

    _isPending = () => this._state === 'pending'
}