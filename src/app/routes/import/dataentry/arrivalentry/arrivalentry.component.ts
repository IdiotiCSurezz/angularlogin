import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-arrivalentry',
  templateUrl: './arrivalentry.component.html',
  styleUrls: ['./arrivalentry.component.scss']
})
export class ArrivalentryComponent implements OnInit {

  formGroup1: FormGroup;
  submitted = false;

  // constructor(private formBuilder: FormBuilder) { }
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.formGroup1 = this.fb.group({
      etaDate: ['', Validators.required],
      intendingAgent: ['', Validators.required],
      contractNumber: ['', Validators.required],
      importerName: ['', Validators.required],
      shipperName: ['', Validators.required],
      lclfcl: ['', Validators.required],
      containerType: ['', Validators.required],
      twentyinch: ['', Validators.required],
      fourtyinch: ['', Validators.required],
      cargoName: ['', Validators.required],
      linerName: ['', Validators.required],
      blnumber: ['', Validators.required],
      blDate: ['', Validators.required],
      hblNumber: ['', Validators.required],
      freeDays: ['', Validators.required],
      loadPort: ['', Validators.required],
      vesselName: ['', Validators.required],
      documentType: ['', Validators.required],
      voyageNo: ['', Validators.required],
      cfs: ['', Validators.required]
     
      });
      
  }

  ngOnInit() {
    this.createForm();
    // this.onSubmit();
  }
  createForm() {
    this.formGroup1 = new FormGroup({
 
      etaDate: new FormControl ('', [Validators.required]),
      intendingAgent: new FormControl('',[Validators.required]),
      contractNumber : new FormControl('', [Validators.required]),
      importerName : new FormControl('', [Validators.required]),
      shipperName: new FormControl('',[Validators.required]),
      lclfcl: new FormControl('',[Validators.required]),
      containerType: new FormControl('',[Validators.required]),
      twentyinch: new FormControl('',[Validators.required]),
      fourtyinch: new FormControl('',[Validators.required]),
      cargoName: new FormControl('',[Validators.required]),
      linerName: new FormControl('',[Validators.required]),
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
    return this.formGroup1.controls[controlName].hasError(errorName);

  }
  get f() { return this.formGroup1.controls; }

  postdata1(formGroup1) {
    // alert(':-)')
    this.submitted = true;
    // stop here if form is invalid
    if (formGroup1.invalid) {
      alert('Please Fill All Fields...!')
        return;
    }
    this.dataService.arrivalentry(formGroup1.value.etaDate,formGroup1.value.intendingAgent,
      formGroup1.value.contractNumber,formGroup1.value.importerName,formGroup1.value.shipperName,
      formGroup1.value.lclfcl,formGroup1.value.containerType,formGroup1.value.twentyinch,formGroup1.value.fourtyinch,
      formGroup1.value.cargoName,formGroup1.value.linerName,formGroup1.value.blnumber,
      formGroup1.value.blDate,formGroup1.value.hblNumber,formGroup1.value.freeDays,
      formGroup1.value.loadPort,formGroup1.value.vesselName,formGroup1.value.documentType,formGroup1.value.voyageNo,
      formGroup1.value.cfs)
.pipe(first())
.subscribe(
data => {
alert('Data Added Successfully')
window.location.reload();
// this.router.navigate(['dashboard']);
},
error => {
});
}

postdata()
{
  //alert('SUCCESS!! :-)');
  console.log('success');
}

}
