module.exports = {
    "moduleNameMapper": {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "collectCoverageFrom": [ 'src/**/*.js' ],
    "testPathIgnorePatterns": [
        "/__tests__/__mocks__",
        "/example",
        "/node_modules"
    ]
}