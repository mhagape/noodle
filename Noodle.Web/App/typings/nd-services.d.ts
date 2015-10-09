declare module nd.services {
    interface ISidenavSrv {
        toggle();
    }

    interface INdToolbarSrv {
        setTitle(title: string): void;
    }

    interface INdAuthSrv {
        logout();
        authenticate(provider: string);
    }

    interface INdUserSrv {
        getUserDetailsFromGoogle(): ng.IPromise<any>;
        getUserDetailsFromFacebook(): ng.IPromise<any>;
        getLoggedUser(): ILoggedUser;
    }

    interface INdCoursesSrv {
        getLoggedUserCourses(): ng.IPromise<Array<any>>;
        getCourses(): ng.IPromise<Array<any>>;
    }
}