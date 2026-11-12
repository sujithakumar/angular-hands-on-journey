import { inject, Service } from '@angular/core';
import { USER } from '../HelperFiles/interfaces';
import { ApiService } from './api-service';

@Service()
export class UserService {


    _apiCall = inject(ApiService);
    //available only inside service
    private user: USER = {
        name: "Sujitha",
        age: 30,
        isMarried: false
    }

    getUser(): USER {
        return this.user;
    }

    getUserFromServer() {
        return this._apiCall.getUSers();
    }
}
