import {
  ComponentRef,
  ComponentFactoryResolver,
  ElementRef, OnInit,
  ViewContainerRef,
  ViewChild,
  Component,ViewRef } from "@angular/core";
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FilterComponent} from 'src/app/model/filter/filter.component';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
interface Column {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  ngOnInit() {

  }

}

