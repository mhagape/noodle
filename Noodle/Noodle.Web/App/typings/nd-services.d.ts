declare module nd.services {
    interface ISidenavService {
        toggle();
    }

    interface INdToolbarService {
        setTitle(title: string): void;
    }
}