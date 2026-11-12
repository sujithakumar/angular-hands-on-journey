import { HttpClient } from '@angular/common/http';
import { inject, Inject, Service } from '@angular/core';

@Service()
export class ApiService {

   private readonly API_URL = "https://jsonplaceholder.typicode.com/";
   _http = inject(HttpClient);
   
   getUSers(){
    let getURL = `${this.API_URL}users`
    return this._http.get(getURL);
   }

}
