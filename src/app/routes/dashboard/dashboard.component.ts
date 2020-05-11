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
  columns: Column[] = [
    {value: 'Importer-0', viewValue: 'Importer Name'},
    {value: 'ETA-1', viewValue: 'ETA date'},
    {value: 'Cargo-2', viewValue: 'Cargo name'}
  ];
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;


  addFieldValue() {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;
  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<FilterComponent>>()

  constructor(private CFR: ComponentFactoryResolver) {}

  createComponent() {
    
      console.log(this.columns.values['Select'])
    let componentFactory = this.CFR.resolveComponentFactory(FilterComponent);
    let childComponentRef = this.VCR.createComponent(componentFactory);
    let filterComponent = childComponentRef.instance;
    filterComponent.unique_key = ++this.child_unique_key;
    filterComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
    }

  remove(key: number) {
    if (this.VCR.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == key
    );

    let vcrIndex: number = this.VCR.indexOf(componentRef as any);

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== key
    );
  }
  
  ngOnInit() {

  }

}

