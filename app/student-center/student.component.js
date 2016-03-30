System.register(['angular2/core', 'angular2/router', './student-home.component', './student-detail.component', './student.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, student_home_component_1, student_detail_component_1, student_service_1;
    var StudentCenterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_home_component_1_1) {
                student_home_component_1 = student_home_component_1_1;
            },
            function (student_detail_component_1_1) {
                student_detail_component_1 = student_detail_component_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentCenterComponent = (function () {
                function StudentCenterComponent() {
                }
                StudentCenterComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../../templates/student-main.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [student_service_1.StudentService]
                    }),
                    router_1.RouteConfig([
                        { path: '/students', name: 'StudentHome', component: student_home_component_1.StudentHomeComponent },
                        { path: '/student/:id', name: 'Student', component: student_detail_component_1.StudentDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], StudentCenterComponent);
                return StudentCenterComponent;
            })();
            exports_1("StudentCenterComponent", StudentCenterComponent);
        }
    }
});
//# sourceMappingURL=student.component.js.map