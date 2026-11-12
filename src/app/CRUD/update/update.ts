import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYEE } from '../../HelperFiles/interfaces';
import { JsonApiService } from '../json-api-service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-update',
  styleUrl: './update.scss',
  templateUrl: './update.html',
})
export class Update {

  employee$ !: Observable<EMPLOYEE[]>;
  _apiService = inject(JsonApiService);

  _activated_Route = inject(ActivatedRoute);
  userId: number = 0;

  empData!: EMPLOYEE;

  ngOnInit(): void {
    this.userId = this._activated_Route.snapshot.params['id'];
    this.getEmpData(this.userId);
  }

  getEmpData(id: number) {
    this._apiService.getEmployeeById(id).subscribe((x: EMPLOYEE) => {
      this.empData = x;
      this.patchValue();
    });
  }

  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      id: [''],
      name: [''],
      userName: [''],
      email: [''],
      age: [''],

      address: this.fb.group({
        city: [''],
        pincode: [''],
        isChecked: [true]
      }),
      //add or remove elements / form controls
      skills: this.fb.array([]),
    });


    // //  this.reactiveForm = new FormGroup({
    // //   id: new FormControl(),
    // //   name: new FormControl(""),
    // //   userName: new FormControl(""),
    // //   email: new FormControl(""),
    // //   age: new FormControl(),

    // //   address: new FormGroup({
    // //     city: new FormControl(""),
    // //     pincode: new FormControl(),
    // //     isChecked: new FormControl(true)
    // //   }),
    // // });

    // this.reactiveForm.get('address.isChecked')?.disable();

  }

  get skills(): FormArray {
    return this.reactiveForm.get("skills") as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: [''] // Matches formControlName="skill" in template
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }


  setAllValues() {

    const skillsArray = this.reactiveForm.get('skills') as FormArray;
    skillsArray.clear();

    skillsArray.push(this.fb.group({ skill: 'Java' }));


    this.reactiveForm.setValue({
      id: 3,
      name: 'biriyani',
      userName: 'biri',
      email: 'biriyani@gmail.email',
      age: 20,
      address: {
        city: 'cooker',
        pincode: 20012,
        isChecked: false
      },
      skills: [
        { skill: 'Java' }
      ]
    })
  }

  patchValue() {
    this.reactiveForm.patchValue({
      id: this.empData.id,
      name: this.empData.name,
      userName: this.empData.userName,
      email: this.empData.email,
      age: this.empData.age
    });
  }

  // patchValue() {
  //   this.reactiveForm.controls['userName'].patchValue('burger');
  // }

  eraseData() {
    // this.reactiveForm.patchValue({
    //   userName: ''
    // });
    this.reactiveForm.reset();
  }


  submitData() {
    console.log(this.reactiveForm.value);

    let userData: any = {
      id: this.userId,
      name: this.reactiveForm.get('name')?.value,
      userName: this.reactiveForm.get('userName')?.value,
      email: this.reactiveForm.get('email')?.value,
      age: this.reactiveForm.get('age')?.value,
    };

    this._apiService.updateEmployee(this.userId, userData).subscribe({
      next: (response) => {
        console.log("success", response);
      },
      error: (error) => {
        console.error("error", error);
      }
    });
  }

}
