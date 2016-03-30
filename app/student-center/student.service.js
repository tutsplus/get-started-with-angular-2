System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Student, StudentService, STUDENTS, studentsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Student = (function () {
                function Student(id, name, track) {
                    this.id = id;
                    this.name = name;
                    this.track = track;
                }
                return Student;
            })();
            exports_1("Student", Student);
            StudentService = (function () {
                function StudentService() {
                }
                StudentService.prototype.getStudents = function () { return studentsPromise; };
                StudentService.prototype.getStudent = function (id) {
                    return studentsPromise
                        .then(function (students) { return students.filter(function (student) { return student.id === +id; })[0]; });
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StudentService);
                return StudentService;
            })();
            exports_1("StudentService", StudentService);
            STUDENTS = [
                new Student(1001, 'Johnny Code', 'Full-Stack Developer'),
                new Student(1002, 'Peter Programmer', 'Front End Developer'),
                new Student(1003, 'Dawn Script', 'Ruby'),
                new Student(1004, 'Becky Brackets', 'PHP'),
                new Student(1005, 'Julie Java', 'JavaScript'),
                new Student(1006, 'Mike Function', 'WordPress')
            ];
            studentsPromise = Promise.resolve(STUDENTS);
        }
    }
});
//# sourceMappingURL=student.service.js.map