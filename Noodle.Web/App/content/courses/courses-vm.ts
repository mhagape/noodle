class CoursesVm {
    public static $inject = ["ndToolbarService"];
    constructor(ndToolbarService: nd.services.INdToolbarService) {
        var self = this;
        ndToolbarService.setTitle("Courses");
 
        self.courses = [
            {
                title: "Software Security",
                professor: "Michael Hicks",
                description: 'This course we will explore the foundations of software security. We will consider important software vulnerabilities and attacks that exploit them -- such as buffer overflows, SQL injection, and session hijacking -- and we will consider defenses that prevent or mitigate these attacks, including advanced testing and program analysis techniques. Importantly, we take a "build security in" mentality, considering techniques at each phase of the development cycle that can be used to strengthen the security of software systems.'
            },
            {
                title: "Wireless Communication Emerging Technologies",
                professor: "Jong-Moon Chung",
                description: "This course covers the services and specifications of the most popular wireless communication technologies used around the world. "
            },
            {
                title: "Cryptography I",
                professor: "Dan Boneh",
                description: "Cryptography is an indispensable tool for protecting information in computer systems. This course explains the inner workings of cryptographic primitives and how to correctly use them. Students will learn how to reason about the security of cryptographic constructions and how to apply this knowledge to real-world applications."
            },
            {
                title: "Cybersecurity and Its Ten Domains",
                professor: "Dr. Humayun Zafar",
                description: "This course is designed to introduce students, working professionals and the community to the exciting field of cybersecurity. Throughout the MOOC, participants will engage in community discourse and online interaction. Participants will gain knowledge and understanding of cybersecurity and its domains. "
            }, {
                title: "Big Data, Cloud Computing, & CDN Emerging Technologies",
                professor: "Jong-Moon Chung",
                description: "You have most likely heard about Clouds and Big Data before, and already know how significantly important they are and will be in the future."
            }
        ];
    }
    public courses = null;
}

export function register(app: ng.IModule) {
    app.controller("coursesVm", CoursesVm);
}