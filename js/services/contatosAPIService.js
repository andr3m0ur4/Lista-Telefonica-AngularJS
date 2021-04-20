app.factory('contatosAPI', ($http, config) => {
    const _getContatos = () => $http.get(`${config.baseURL}/contatos`)
    const _getContato = id => $http.get(`${config.baseURL}/contatos/${id}`)
    const _saveContato = contato => $http.post(`${config.baseURL}/contatos`, contato)

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato
    }
})