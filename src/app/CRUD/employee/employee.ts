import { ChangeDetectorRef, Component, Inject, inject, OnInit, signal } from '@angular/core';
import { EMPLOYEE } from '../../HelperFiles/interfaces';
import { JsonApiService } from '../json-api-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-employee',
  styleUrl: './employee.scss',
  templateUrl: './employee.html',
})
export class Employee implements OnInit {

  employee$ !: Observable<EMPLOYEE[]>;
  _apiService = inject(JsonApiService);
  _router = inject(Router);

  emp = signal<EMPLOYEE[]>([])

  getEmployees() {
    this.employee$ = this._apiService.getEmployees();

    this._apiService.getEmployees().subscribe((data)=>{
      this.emp.set(data);
    })
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  addUser() {
    this._router.navigateByUrl('/create');
  }

  updateItem(empId: any) {
    this._router.navigate(['/update', empId]);
  }

  viewData(empId: any) {
    this._router.navigate(['/view', empId])
  }

  deleteItem(empId: any){
    this._apiService.deleteEmployee(empId).subscribe(()=>{
      console.log("delete success");
      this.getEmployees();
    })
  }

}
