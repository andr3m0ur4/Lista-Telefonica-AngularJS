app.factory('loadingInterceptor', ($q, $rootScope, $timeout) => {
    return {
        request: config => {
            $rootScope.loading = true
            return config
        },
        requestError: rejection => {
            $rootScope.loading = false
            return $q.reject(rejection)
        },
        response: response => {
            $timeout(() => {
                $rootScope.loading = false
            }, 500)
            return response
        },
        responseError: rejection => {
            $rootScope.loading = false
            return $q.reject(rejection)
        }
    }
})