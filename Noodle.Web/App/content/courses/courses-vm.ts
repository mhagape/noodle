class CoursesVm {

    private $mdDialog: md.IDialogService;

    public static $inject = ["ndToolbarService", "$mdDialog"];
    constructor(ndToolbarService: nd.services.INdToolbarSrv,
        $mdDialog: md.IDialogService) {
        var self = this;
        self.$mdDialog = $mdDialog;
        ndToolbarService.setTitle("Courses");

        self.courses = [
            {
                title: "Software Security",
                professor: "Michael Hicks",
                description: 'This course we will explore the foundations of software security. We will consider important software vulnerabilities and attacks that exploit them -- such as buffer overflows, SQL injection, and session hijacking -- and we will consider defenses that prevent or mitigate these attacks, including advanced testing and program analysis techniques. Importantly, we take a "build security in" mentality, considering techniques at each phase of the development cycle that can be used to strengthen the security of software systems.',
                rating: 5
            },
            {
                title: "Wireless Communication Emerging Technologies",
                professor: "Jong-Moon Chung",
                description: "This course covers the services and specifications of the most popular wireless communication technologies used around the world. ",
                rating: 4
            },
            {
                title: "Cryptography I",
                professor: "Dan Boneh",
                description: "Cryptography is an indispensable tool for protecting information in computer systems. This course explains the inner workings of cryptographic primitives and how to correctly use them. Students will learn how to reason about the security of cryptographic constructions and how to apply this knowledge to real-world applications.",
                rating: 3

            },
            {
                title: "Cybersecurity and Its Ten Domains",
                professor: "Dr. Humayun Zafar",
                description: "This course is designed to introduce students, working professionals and the community to the exciting field of cybersecurity. Throughout the MOOC, participants will engage in community discourse and online interaction. Participants will gain knowledge and understanding of cybersecurity and its domains. ",
                rating: 1
            }, {
                title: "Big Data, Cloud Computing, & CDN Emerging Technologies",
                professor: "Jong-Moon Chung",
                description: "You have most likely heard about Clouds and Big Data before, and already know how significantly important they are and will be in the future.",
                rating: 2
            }
        ];
    }

    public showRatingDialog(ev, course) {
        var self = this;
        self.$mdDialog.show({
            controller: "starRatingDialogVm",
            controllerAs: "vm",
            templateUrl: "App/dialogs/starRatingDialog/star-rating-dialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
                course: course
            }
        });
    }

    public courses = null;
}

export function register(app: ng.IModule) {
    app.controller("coursesVm", CoursesVm);
}