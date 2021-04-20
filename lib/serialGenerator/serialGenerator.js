angular.module('serialGenerator', [])

angular.module('serialGenerator').provider('serialGenerator', function() {
    let length = 10

    this.getLength = () => length

    this.setLength = value => length = value

    this.$get = () => {
        return {
            generate: () => {
                let serial = ''

                while (serial.length < length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32)
                }

                return serial
            }
        }
    }
})