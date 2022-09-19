export default class Covid {

    getData(uf) {
        return  fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)        
    }
}