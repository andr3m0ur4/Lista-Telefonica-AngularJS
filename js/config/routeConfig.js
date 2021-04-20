app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider.when('/contatos', {
        templateUrl: 'view/contatos.html',
        controller: 'listaTelefonicaCtrl',
        resolve: {
            contatos: contatosAPI => contatosAPI.getContatos(),
            operadoras: operadorasAPI => operadorasAPI.getOperadoras()
        }
    })
    $routeProvider.when('/novoContato', {
        templateUrl: 'view/novoContato.html',
        controller: 'novoContatoCtrl',
        resolve: {
            operadoras: operadorasAPI => operadorasAPI.getOperadoras()
        }
    })
    $routeProvider.when('/detalhesContato/:id', {
        templateUrl: 'view/detalhesContato.html',
        controller: 'detalhesContatoCtrl',
        resolve: {
            contato: (contatosAPI, $route) => contatosAPI.getContato($route.current.params.id)
        }
    })
    $routeProvider.when('/error', {
        templateUrl: 'view/error.html'
    })
    $routeProvider.otherwise({
        redirectTo: '/contatos'
    })
})