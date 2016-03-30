import {Component}     from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  templateUrl: '../templates/login.html',
})
export class LoginComponent {
    userName: string;
    password: string;
    
    loggedIn = false;
    invalid = false
    
    logOn(){
        if(this.userName == 'testUser' && this.password == 'password') {
            this.loggedIn = true;
            
        } else {
            this.invalid = true;
        }
            
    }
    
    logOut(){
        this.invalid = false;
        this.userName = 'Please enter Username and password';
        this.password ='12345';
        this.loggedIn = false;
    }
}
