export function register(app: ng.IModule) {
    app.config([
        "$mdIconProvider", ($mdIconProvider) => {
            $mdIconProvider
                .iconSet("call", 'content/angular-material-icons/communication.svg')
                .iconSet("navigation", 'content/angular-material-icons/navigation.svg')
                .iconSet("toggle", 'content/angular-material-icons/toggle.svg')
                .iconSet("communication", 'content/angular-material-icons/communication.svg')
                .iconSet("action", 'content/angular-material-icons/action.svg');
        }]);
} 