class NdToolbarService implements nd.services.INdToolbarSrv {
    private $$title: string;

    public setTitle(title: string): void {
        var self = this;
        self.$$title = title;
    }

}
export function register(app: ng.IModule) {
    app.service("ndToolbarService", NdToolbarService);
}