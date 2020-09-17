export class AuthService {
    loggedIn = false;

    isAuthentication() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 500);
            });
     // tslint:disable-next-line: align
     return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
