import {Component} from 'angular2/core';
import {TubeComponent} from './tube.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {StyleDirective} from './style.directive';
import {StudentCenterComponent} from './student-center/student.component';


@Component({
    selector: 'my-app',
    templateUrl:'../templates/main.html',
    directives: [TubeComponent, ROUTER_DIRECTIVES, StyleDirective]
})
@RouteConfig ([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/student-center/...', name: 'StudentCenter', component: StudentCenterComponent}

])
export class MainComponent {}