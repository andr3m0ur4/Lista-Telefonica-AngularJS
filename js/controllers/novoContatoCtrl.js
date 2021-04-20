app.controller('novoContatoCtrl', function($scope, contatosAPI, serialGenerator, $location, operadoras) {
    $scope.operadoras = operadoras.data

    $scope.app = 'Lista Telefônica'
    $scope.contatos = []

    $scope.adicionarContato = contato => {
        contato.serial = serialGenerator.generate()
        contato.data = new Date()
        contatosAPI.saveContato(contato)
            .then(data => {
                delete $scope.contato
                $scope.contatoForm.$setPristine()
                $location.path('/contatos')
            })
    }
})