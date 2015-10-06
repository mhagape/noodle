declare module nd.services {
    interface ISidenavService {
        toggle();
    }

    interface INdToolbarService {
        setTitle(title: string): void;
    }

    interface INdAuthService {
        logout();
        authenticate(provider: string);
    }

    interface INdUserService {
        getUserDetailsFromGoogle(): ng.IPromise<any>;
        getUserDetailsFromFacebook(): ng.IPromise<any>;
        getLoggedUser(): ILoggedUser;
    }
}