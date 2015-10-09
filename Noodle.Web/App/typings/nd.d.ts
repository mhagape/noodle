declare module nd {
    interface ILoggedUser {
        email: string;
        avatar: string;
        name: string;
        _links: Array<ILink>;
    }

    interface ILink {
        rel: string;
        href: string;
    }
} 