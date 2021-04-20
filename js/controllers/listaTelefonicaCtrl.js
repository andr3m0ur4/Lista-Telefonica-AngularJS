app.controller('listaTelefonicaCtrl', function($scope, contatos, operadoras, serialGenerator) {
    function generateSerial(contatos) {
        contatos.forEach(item => {
            item.serial = serialGenerator.generate()
        })
    }

    $scope.app = 'Lista Telefônica'
    $scope.contatos = contatos.data
    $scope.operadoras = operadoras.data
    $scope.classe1 = 'selecionado'
    $scope.classe2 = 'negrito'

    $scope.adicionarContato = contato => {
        contato.serial = serialGenerator.generate()
        contato.data = new Date()
        contatosAPI.saveContato(contato)
            .then(data => {
                delete $scope.contato
                $scope.contatoForm.$setPristine()
                carregarContatos()
            })
    }

    $scope.apagarContatos = contatos => {
        $scope.contatos = contatos.filter(contato => !contato.selecionado)
    }

    $scope.isContatoSelecionado = contatos => {
        return contatos.some(contato => contato.selecionado)
    }

    $scope.ordenarPor = campo => {
        $scope.criterio = campo
        $scope.direcao = !$scope.direcao
    }

    generateSerial($scope.contatos)
})