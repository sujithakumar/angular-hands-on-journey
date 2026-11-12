import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { EMPLOYEE } from '../HelperFiles/interfaces';
import { Employee } from './employee/employee';


@Service()
export class JsonApiService {

    private readonly API_URL: string = "http://localhost:3000/employee";

    private readonly _http = inject(HttpClient);

    getEmployees() {
        return this._http.get<EMPLOYEE[]>(this.API_URL);
    }

    createEmployee(data: EMPLOYEE) {
        return this._http.post(this.API_URL, data);
    }

    getEmployeeById(id: number) {
        let newURL = `${this.API_URL}/${id}`;
        return this._http.get<EMPLOYEE>(newURL);
    }

    updateEmployee(id: number, data: Employee) {
        let newURL = `${this.API_URL}/${id}`;
        return this._http.put(newURL, data);
    }

    deleteEmployee(id: number) {
        let newURL = `${this.API_URL}/${id}`;
        return this._http.delete(newURL)
    }
}
