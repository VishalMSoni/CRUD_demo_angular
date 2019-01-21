import { Injectable } from '@angular/core';
import { dataArray, AddUser } from './add-user';

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }
    // url = "http://localhost:3000/jsonData";

    data = [];

    // public CreateUser(user: AddUser): Observable<void> {
    //     return this.http.post<void>(this.url, user);
    // }
    // public getUsers(): Observable<AddUser[]> {
    //     return this.http.get<AddUser[]>(this.url);
    // }

    getData() {
        return dataArray;
    }

    deleteData(i) {
        dataArray.splice(i, 1);
    }
}
