module.exports = {
    setupFiles: ['<rootDir>/enzyme.config.js'],
    moduleNameMapper:{
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
}