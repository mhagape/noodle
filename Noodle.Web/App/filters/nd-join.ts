export function register(app: ng.IModule) {
    app.filter("ndJoin", () => {
        return (list, prop) => {
            var propValueList = [];
            angular.forEach(list, (value, _) => {
                propValueList.push(value[prop]);
            });

            return propValueList.join(", ");
        };
    });
}