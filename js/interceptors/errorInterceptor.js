app.factory('errorInterceptor', ($q, $location) => {
    return {
        responseError: rejection => {
            if (rejection.status === 404) {
                $location.path('/error')
            }
            return $q.reject(rejection)
        }
    }
})