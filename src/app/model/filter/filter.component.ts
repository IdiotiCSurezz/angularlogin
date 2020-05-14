import { Component, OnInit,ComponentRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ArrivalreportComponent } from 'src/app/routes/import/datareport/arrivalreport/arrivalreport.component';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public unique_key: number;
  public parentRef: ArrivalreportComponent;
  dynamicForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  toppingsControl = new FormControl([]);
  toppingList: string[] = ['test', 'test1', 'User 3', 'User 4', 'User 5', 'User 6'];

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  get filtersFormArray() {
    return (<FormArray>this.dynamicForm.get('filters'));
  }

  // remove_me(index) {
  //   this.filtersFormArray.removeAt(index);
  // }

  remove_me() {
    console.log(this.unique_key)
    this.parentRef.remove(this.unique_key)
    
  }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      filters: this.fb.array([])
    });
  }


}
