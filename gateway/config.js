module.exports = {
    development: {
        port: process.env.PORT || 3000,
    },
    services: {
        testService: {
            host: 'localhost',
            port: '8080'
        },
        authService: {
            host: 'localhost',
            port: '9000'
        }
    },
}