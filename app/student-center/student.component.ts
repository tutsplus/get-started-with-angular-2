import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentHomeComponent} from './student-home.component';
import {StudentDetailComponent} from './student-detail.component';
import {Student,StudentService} from './student.service';

@Component({
    templateUrl : '../../templates/student-main.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [StudentService]
})
@RouteConfig([
    {path:'/students',    name: 'StudentHome',   component: StudentHomeComponent},   
    {path:'/student/:id',    name: 'Student',   component: StudentDetailComponent} 
]) 

export class StudentCenterComponent {}
