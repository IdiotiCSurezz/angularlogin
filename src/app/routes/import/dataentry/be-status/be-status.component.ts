import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable }  from 'rxjs/Observable';
// import { V } from '@angular/core/src/render3';
import { validateHorizontalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-be-status',
  templateUrl: './be-status.component.html',
  styleUrls: ['./be-status.component.scss']
})
export class BeStatusComponent implements OnInit {
  isLinear = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  formGroup: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    // this.onSubmit();
    this.firstFormGroup = this.formBuilder.group({
      jobNumber: ['', Validators.required],
      importerName: ['',Validators.required],
      shipperName: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      jobNumber: ['', Validators.required],
      importerName: ['',Validators.required],
      shipperName: ['', Validators.required],    
    });
    this.thirdFormGroup = this.formBuilder.group({
      jobNumber: ['', Validators.required],
      importerName: ['',Validators.required],
      shipperName: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      jobNumber: ['', Validators.required],
      importerName: ['',Validators.required],
      shipperName: ['', Validators.required],
    });
  }

  createForm() {
    this.formGroup = new FormGroup({
      etaDate: new FormControl ('', [Validators.required]),
      intendingAgent: new FormControl('',[Validators.required]),
      contractNumber : new FormControl('', [Validators.required]),
      partyName : new FormControl('', [Validators.required]),
      shipperName: new FormControl('',[Validators.required]),
      lclfcl: new FormControl('',[Validators.required]),
      containerType: new FormControl('',[Validators.required]),
      twentyinch: new FormControl('',[Validators.required]),
      fourtyinch: new FormControl('',[Validators.required]),
      cargoName: new FormControl('',[Validators.required]),
      linearName: new FormControl('',[Validators.required]),
      blnumber: new FormControl('',[Validators.required]),
      blDate: new FormControl('',[Validators.required]),
      hblNumber: new FormControl('',[Validators.required]),
      freeDays: new FormControl('',[Validators.required]),
      loadPort: new FormControl('',[Validators.required]),
      vesselName: new FormControl('',[Validators.required]),
      documentType: new FormControl('',[Validators.required]),
      voyageNo: new FormControl('',[Validators.required]),
      cfs: new FormControl('',[Validators.required]),


    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);

  }
  get f() { return this.formGroup.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value, null, 4));
}

}
