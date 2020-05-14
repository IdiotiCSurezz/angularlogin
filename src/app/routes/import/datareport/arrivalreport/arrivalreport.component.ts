import {DataService} from 'src/app/service/data.service';
  import {HttpClient} from '@angular/common/http';
  import { MatDialog } from '@angular/material/dialog';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatSort } from '@angular/material/sort';
  import {Arrivalreport} from 'src/app/model/arrivalreport';
  import {DataSource} from '@angular/cdk/collections';
  // import {AddDialogComponent} from './dialogs/add/add.dialog.component';
  // import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
  // import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
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

  interface Column {
    value: string;
    viewValue: string;
  }
  
@Component({
  selector: 'app-arrivalreport',
  templateUrl: './arrivalreport.component.html',
  styleUrls: ['./arrivalreport.component.scss']
})
export class ArrivalreportComponent implements OnInit {

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

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public dataService: DataService,
    private CFR: ComponentFactoryResolver) {}

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

    displayedColumns = ['id', 'importer_name', 
    'shipper_name', 'cargo_name','bl_number',
     'bl_date', 'etadate', 'freedays', 'cfs','intending_agent','contract_number','vessel_name' ];
    exampleDatabase: DataService | null;
    dataSource: ExampleDataSource | null;
    index: number;
    id: number;
  
  
  
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild('filter',  {static: true}) filter: ElementRef;
    
  
    ngOnInit() {
      this.loadData();
    }
  
    refresh() {
      this.loadData();
    }
  
    // addNew(issue: Issue) {
    //   const dialogRef = this.dialog.open(AddDialogComponent, {
    //     data: {issue: issue }
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     if (result === 1) {
    //       // After dialog is closed we're doing frontend updates
    //       // For add we're just pushing a new row inside DataService
    //       this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
    //       this.refreshTable();
    //     }
    //   });
    // }
  
    // startEdit(i: number, id: number, title: string, state: string, url: string, created_at: string, updated_at: string) {
    //   this.id = id;
    //   // index row is used just for debugging proposes and can be removed
    //   this.index = i;
    //   console.log(this.index);
    //   const dialogRef = this.dialog.open(EditDialogComponent, {
    //     data: {id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at}
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     if (result === 1) {
    //       // When using an edit things are little different, firstly we find record inside DataService by id
    //       const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
    //       // Then you update that record using data from dialogData (values you enetered)
    //       this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
    //       // And lastly refresh table
    //       this.refreshTable();
    //     }
    //   });
    // }
  
    // deleteItem(i: number, id: number, title: string, state: string, url: string) {
    //   this.index = i;
    //   this.id = id;
    //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //     data: {id: id, title: title, state: state, url: url}
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     if (result === 1) {
    //       const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
    //       // for delete we use splice in order to remove single object from DataService
    //       this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
    //       this.refreshTable();
    //     }
    //   });
    // }
  
  
    private refreshTable() {
      // Refreshing table using paginator
      // Thanks yeager-j for tips
      // https://github.com/marinantonio/angular-mat-table-crud/issues/12
      this.paginator._changePageSize(this.paginator.pageSize);
    }
  
  
    /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
      // OLD METHOD:
      // if there's a paginator active we're using it for refresh
      if (this.dataSource._paginator.hasNextPage()) {
        this.dataSource._paginator.nextPage();
        this.dataSource._paginator.previousPage();
        // in case we're on last page this if will tick
      } else if (this.dataSource._paginator.hasPreviousPage()) {
        this.dataSource._paginator.previousPage();
        this.dataSource._paginator.nextPage();
        // in all other cases including active filter we do it like this
      } else {
        this.dataSource.filter = '';
        this.dataSource.filter = this.filter.nativeElement.value;
      }*/
  
  
  
    public loadData() {
      this.exampleDatabase = new DataService(this.httpClient);
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
      fromEvent(this.filter.nativeElement, 'keyup')
        // .debounceTime(150)
        // .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) {
            return;
          }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
  }
  
  export class ExampleDataSource extends DataSource<Arrivalreport> {
    _filterChange = new BehaviorSubject('');
  
    get filter(): string {
      return this._filterChange.value;
    }
  
    set filter(filter: string) {
      this._filterChange.next(filter);
    }
  
    filteredData: Arrivalreport[] = [];
    renderedData: Arrivalreport[] = [];
  
    constructor(public _exampleDatabase: DataService,
                public _paginator: MatPaginator,
                public _sort: MatSort) {
      super();
      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Arrivalreport[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._exampleDatabase.dataChange,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page
      ];
  
      this._exampleDatabase.getAllIssues();
  
  
      return merge(...displayDataChanges).pipe(map( () => {
          // Filter data
          this.filteredData = this._exampleDatabase.data.slice().filter((issue: Arrivalreport) => {
            const searchStr = (issue.id + issue.etadate + issue.importer_name + issue.shipper_name+ 
              issue.cargo_name+ issue.freedays+ issue.bl_date+issue.contract_number+ issue.intending_agent+ issue.cfs +issue.bl_number+issue.vessel_name).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
  
          // Sort filtered data
          const sortedData = this.sortData(this.filteredData.slice());
  
          // Grab the page's slice of the filtered sorted data.
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
          return this.renderedData;
        }
      ));
    }
  
    disconnect() {}
  
  
    /** Returns a sorted copy of the database data. */
    sortData(data: Arrivalreport[]): Arrivalreport[] {
      if (!this._sort.active || this._sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';
  
        switch (this._sort.active) {
          case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
          case 'etadate': [propertyA, propertyB] = [a.etadate, b.etadate]; break;
          case 'importer_name ': [propertyA, propertyB] = [a.importer_name, b.importer_name]; break;
          case 'shipper_name ': [propertyA, propertyB] = [a.shipper_name, b.shipper_name]; break;
          case 'cargo_name ': [propertyA, propertyB] = [a.cargo_name, b.cargo_name]; break;
          case 'freedays ': [propertyA, propertyB] = [a.freedays, b.freedays]; break;
          case 'bl_number  ': [propertyA, propertyB] = [a.bl_number, b.bl_number]; break;
          case 'bl_date  ': [propertyA, propertyB] = [a.bl_date, b.bl_date]; break;
          case 'intending_agent  ': [propertyA, propertyB] = [a.intending_agent, b.intending_agent]; break;
          case 'contract_number  ': [propertyA, propertyB] = [a.contract_number, b.contract_number]; break
          case 'vessel_name  ': [propertyA, propertyB] = [a.vessel_name, b.vessel_name]; break
          case 'cfs  ': [propertyA, propertyB] = [a.cfs, b.cfs]; break;
            
        }
  
        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  