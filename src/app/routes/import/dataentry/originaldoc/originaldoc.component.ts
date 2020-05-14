import { Component, OnInit, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { MustMatch } from '../arrival/must-match.validator';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

// import { Observable } from 'rxjs/Observable';

// import { relative } from 'path';

@Component({
  selector: 'app-originaldoc',
  templateUrl: './originaldoc.component.html',
  styleUrls: ['./originaldoc.component.scss']
})
export class OriginaldocComponent implements OnInit {

  formGroup1: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup1 = this.formBuilder.group({
      job: ['', Validators.required],
      partyName: ['', Validators.required],
      blNumber: ['', Validators.required],
      receiveDate: ['', Validators.required]
    
      });
   }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }
  ngOnInit() {
      
  }

}
