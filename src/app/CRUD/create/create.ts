import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EMPLOYEE } from '../../HelperFiles/interfaces';
import { JsonApiService } from '../json-api-service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormsModule],
  selector: 'app-create',
  styleUrl: './create.scss',
  templateUrl: './create.html',
})
export class Create {

  employeeObj: EMPLOYEE = {};

  apiService = inject(JsonApiService);
  _router = inject(Router);

  ngOnInit(): void { }

  setALLValues(empCreateForm: NgForm) {
   let Obj = {
      id: 1,
      name: "Rajendar",
      userName: "Raja",
      email: "raj@gamil.com",
      age: 23,
    };
    empCreateForm.form.setValue(Obj);
  }

  patchValues(empCreateForm: NgForm) {
    this.employeeObj = {
     
      name: "Girl",
      userName: "girl",
      email: "giraj@gamil.com",
     
    };
    empCreateForm.form.patchValue(this.employeeObj);
  }

  submitData(formData: NgForm) {
    let data = formData.value;
    let payload: EMPLOYEE = data;
    this.apiService.createEmployee(payload).subscribe(x => {
      this._router.navigateByUrl('/crud');
    });
  }

  eraseData(empCreateForm : NgForm) {
    empCreateForm.reset();
    empCreateForm.resetForm();
  }
}