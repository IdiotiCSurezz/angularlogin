import { Component, OnInit,ComponentRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DashboardComponent } from 'src/app/routes/dashboard/dashboard.component';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public unique_key: number;
  public parentRef: DashboardComponent;
  constructor() { }

  toppingsControl = new FormControl([]);
  toppingList: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6'];

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

  remove_me() {
    console.log(this.unique_key)
    this.parentRef.remove(this.unique_key)
  }

  ngOnInit(): void {
  }


}
