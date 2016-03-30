System.register(['angular2/core', 'angular2/router', './student.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, student_service_1;
    var StudentHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentHomeComponent = (function () {
                function StudentHomeComponent(_router, _studentService) {
                    this._router = _router;
                    this._studentService = _studentService;
                }
                StudentHomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._studentService.getStudents().then(function (theStudents) { return _this.students = theStudents; });
                };
                StudentHomeComponent.prototype.chooseStudent = function (student) {
                    this._router.navigate(['Student', { id: student.id }]);
                };
                StudentHomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../../templates/student-home.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
                ], StudentHomeComponent);
                return StudentHomeComponent;
            })();
            exports_1("StudentHomeComponent", StudentHomeComponent);
        }
    }
});
//# sourceMappingURL=student-home.component.js.map