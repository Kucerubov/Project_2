import requestSend from "../http";

const AuthService = (function () {
    function AuthService() {}
    AuthService.login = function (identifier, password) {
        return new Promise((resolve) => {
            resolve(requestSend('POST', 'auth/local', { identifier: identifier, password: password }))
        })
    };
    AuthService.registration = function (username, email, password) {
        return new Promise((resolve) => {
            resolve(requestSend('POST', 'auth/local/register', { username: username, email: email, password: password }))
        })
    };
    return AuthService;

}());

export default AuthService;