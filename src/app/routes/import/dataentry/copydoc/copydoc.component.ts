import { Component, OnInit } from '@angular/core';

import { EmailValidator } from '@angular/forms';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable }    from 'rxjs/Observable';
// import { V } from '@angular/core/src/render3';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-copydoc',
  templateUrl: './copydoc.component.html',
  styleUrls: ['./copydoc.component.scss']
})
export class CopydocComponent implements OnInit {

  formGroup1: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup1 = this.formBuilder.group({
      blnumber: ['', Validators.required],
      commodity: ['', Validators.required]
      
      });
   }

  ngOnInit() {
    // this.createForm();
    this.formGroup1 = new FormGroup({
      blnumber: new FormControl(),
      commodity: new FormControl()
   });
  }
  
  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup1.controls[controlName].hasError(errorName);

  }
  get f() { return this.formGroup1.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup1.invalid) {
        return;
    }
 
    alert('SUCCESS!! :-)')
}

}
