class ApiHandler {
    constructor() {}
}

class GiphyApi extends ApiHandler {
    _apiKey = 'NfyuJ4y4jtP4xQQHwclyg13iSv7rV906'

    constructor() {
        super()
    }

    getGifs() {
        let url = 'https://api.giphy.com/v1/gifs/trending'
    }
}

class View {
    _api = new GiphyApi()
    _cache = []
    _searchInput = document.querySelector('#query')
    _resultGrid = document.querySelector('#results')
    _timerId = null

    constructor() {
        this._searchInput.addEventListener('input', (e) => this.search(e))
    }

    search(event) {
        event.preventDefault()

        if (this._timerId) {
            clearTimeout(this._timerId)
        }

        this._timerId = setTimeout(() => {
            this.getGifs(event.target.value)
        }, 500)
    }

    getGifs(searchedQuery) {
        this._clear()

        const data = this._api.getGifs(searchedQuery)

        this._drawGifs(data)
    }

    _clear() {
        for(let i = 0; i < this._resultGrid.children.length; i++) {
            this._resultGrid.children[i].remove()
        }
    }

    _drawGifs(data) {
        console.log('drawed')
    }
}

new View()