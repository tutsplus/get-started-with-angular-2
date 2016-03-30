import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {Student,StudentService} from './student.service';

@Component({
    templateUrl : '../../templates/student-detail.html',
    directives: [ROUTER_DIRECTIVES]       
})
export class StudentDetailComponent implements OnInit {
	student: Student;
    
    constructor( private _routeParams: RouteParams, private _router: Router, private _studentService: StudentService) { }
    
    ngOnInit() {
        let studentID = this._routeParams.get('id');
        this._studentService.getStudent(studentID).then(theStudent => this.student = theStudent)    
    }
}