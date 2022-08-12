class CustomPromise {
    constructor(executor) {
        setTimeout(() => executor(this.resolve, this.reject), 0)
    }

    _state = 'pending'
    // _result = undefined
    // _error = undefined

    resolve(result) {
        if (this.#isPending()) {
            this._state = 'fulfilled'
            this._result = result

            return this
        }
    }

    reject(error) {
        if (this.#isPending()) {
            this._state = 'rejected'

            return this
        }
    }

    #isPending = () => this._state === 'pending'

    then(result) {

    }

    catch(error) {

    }

    finally() {

    }
}