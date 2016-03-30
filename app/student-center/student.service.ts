import {Injectable} from 'angular2/core';

export class Student {
  constructor(public id: number, public name: string, public track: string) { }
}

@Injectable()
export class StudentService {

    getStudents() { return studentsPromise; }
    
    getStudent(id: number | string) {
        return studentsPromise
            .then(students => students.filter(student => student.id === +id)[0]);
    }

}

var STUDENTS = [
    new Student(1001, 'Johnny Code', 'Full-Stack Developer'),
    new Student(1002, 'Peter Programmer', 'Front End Developer'),
    new Student(1003, 'Dawn Script', 'Ruby'),
    new Student(1004, 'Becky Brackets', 'PHP'),
    new Student(1005, 'Julie Java', 'JavaScript'),
    new Student(1006, 'Mike Function', 'WordPress')
];

var studentsPromise = Promise.resolve(STUDENTS);