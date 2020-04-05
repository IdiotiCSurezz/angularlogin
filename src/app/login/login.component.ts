import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
submitted = false;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}

ngOnInit() {
}

get f() {
    return this.angForm.controls;
    }

postdata(angForm1)
{
    // this.submitted = true;
    //  if (this.angForm.invalid) {
    //      return;
    //  }
    //  alert('SUCCESS!! :-)')
this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}