class ApiHandler {
    constructor() {}

    async makeRequest(method, uri, options={}) {
        options['method'] = method.toUpperCase()
        options['mode'] = 'cors'

        const url = new URL(uri)

        if (options.searchParams) {
            for (let prop in options.searchParams) {
                url.searchParams.append(prop, options.searchParams[prop])
            }
        }

        const response = await fetch(url, options)
        return await response.json()
    }
}

class GiphyApi extends ApiHandler {
    _apiKey = 'NfyuJ4y4jtP4xQQHwclyg13iSv7rV906'
    _gifsUrl = 'https://api.giphy.com/v1/gifs/search'

    constructor() {
        super()
    }

    getGifs(query) {
        return this.makeRequest('get', this._gifsUrl, {
            searchParams: {
                api_key: this._apiKey,
                q: query
            }
        })
    }
}

class View {
    _api = new GiphyApi()
    _cache = []
    _searchInput = document.querySelector('#query')
    _resultGrid = document.querySelector('#results')
    _timerId = null

    constructor() {
        this._searchInput.addEventListener('input', (e) => this._search(e))
    }

    _search(event) {
        event.preventDefault()
        
        if (event.target.value === '') return

        if (this._timerId) {
            clearTimeout(this._timerId)
            this._timerId = null
        }

        this._timerId = setTimeout(() => {
            this._getGifs(event.target.value)
        }, 1000)
    }

    _getGifs(searchedQuery) {
        this._clear()
        const data = this._api.getGifs(searchedQuery)
        this._drawGifs(data)
    }

    _clear() {
        let childCount = this._resultGrid.children.length
        for(let i = 0; i < childCount; i++) {
            this._resultGrid.children[0].remove()
        }
    }

    _drawGifs(data) {
        data.then((data) => {
            data.data.forEach(element => {
                let gif = this._createImg(element.images.preview_gif.url)
                console.log(gif)
                this._resultGrid.append(gif)
            });
        })
    }

    _createImg(link) {
        let img = document.createElement('img')
        img.src = link
        return img
    }
}

new View()