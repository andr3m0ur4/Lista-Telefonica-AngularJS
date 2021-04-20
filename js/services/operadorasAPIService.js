app.service('operadorasAPI', function($http, config) {
    this.getOperadoras = () => $http.get(`${config.baseURL}/operadoras`)
})