import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription, throwError } from 'rxjs';

import { catchError, debounceTime, filter, mergeMap, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { ActionButtonComponent } from './action-button/action-button.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  input = new FormControl('');
  frameworkComponents: any;

  columnDefs = [
      {  headerName: 'Title', field: 'title' },
      {  headerName: 'Description', field: 'description' },
      {
        headerName: 'Action',
        cellRenderer: 'actionButton',
        cellRendererParams: {
          onClick: (e) => {
            console.log(e);
            this.router.navigateByUrl('/' + e.rowData.slug);
          },
          label: 'Click 1'
        }
      }
  ];

  rowData = [
      // { make: 'Toyota', model: 'Celica' },
      // { make: 'Ford', model: 'Mondeo' },
      // { make: 'Porsche', model: 'Boxter' }
  ];

  records$: Observable<any>;

  constructor(private apis: ApiService, private router: Router) {
    this.frameworkComponents = {
      actionButton: ActionButtonComponent,
    }
  }

  ngOnInit(): void {

    // this.input.valueChanges.subscribe(text => {
    //   this.loadData(text);
    // })

    this.records$ = this.input.valueChanges
    .pipe(
      debounceTime(500),
      filter(text => text.length >= 3),
      switchMap(text => this.apis.getAllCareers(text)),
    );

  }

}
