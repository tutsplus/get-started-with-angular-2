import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Student,StudentService} from './student.service';

@Component({
    templateUrl : '../../templates/student-home.html'    
})
export class StudentHomeComponent implements OnInit {
    students: Student[];
    
    constructor (private _router: Router, private _studentService: StudentService) { }
    
    ngOnInit() {
        this._studentService.getStudents().then(theStudents => this.students = theStudents)
    }
    
    chooseStudent(student: Student) {
        this._router.navigate( ['Student', { id: student.id }] );
    }

}
