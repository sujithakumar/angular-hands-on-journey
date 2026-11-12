import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonApiService } from '../json-api-service';
import { EMPLOYEE } from '../../HelperFiles/interfaces';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  imports: [CommonModule, JsonPipe],
  selector: 'app-view',
  styleUrl: './view.scss',
  templateUrl: './view.html',
})
export class View implements OnInit {
  userid: number = 0;
  _apiService = inject(JsonApiService);
  employee = signal<EMPLOYEE>({
    userName: '',
    id: 0,
    name: '',
    email: '',
    age: 0
  });

  constructor(private _activatedRoute: ActivatedRoute,) {
    this.userid = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._apiService.getEmployeeById(this.userid).subscribe(data => {
      this.employee.set({
        userName: data.userName,
        id: data.id,
        name: data.name,
        email: data.email,
        age: data.age
      });
    })
  }
}
