import { Injectable } from '@angular/core';
import { AddUser } from './add-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    url = "http://localhost:3000/jsonData";
    constructor(private httpClient: HttpClient) { }

    createUsersData(user: AddUser): Observable<void> {
        return this.httpClient.post<void>(this.url, user);
    }

    getUsersData(): Observable<AddUser[]> {
        return this.httpClient.get<AddUser[]>(this.url);
    }

    getUserByID(id: number): Observable<AddUser> {
        return this.httpClient.get<AddUser>(`${this.url}/${id}`);
    }

    deleteUserByID(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.url}/${id}`);
    }

    updateUserByID(user: AddUser, id: number) {
        return this.httpClient.put(this.url + '/' + id, user);
    }

    getCountries() {
        return [
            { id: 1, name: 'India' },
            { id: 2, name: 'USA' },
            { id: 3, name: 'Australia' }
        ];
    }
    
    getStates() {
        return [
            { id: 1, country_id: 1, name: 'Andhra Pradesh' },
            { id: 2, country_id: 1, name: 'Madhya Pradesh' },
            { id: 3, country_id: 2, name: 'San Francisco' },
            { id: 4, country_id: 2, name: 'Los Angeles' },
            { id: 5, country_id: 3, name: 'New South Wales' },
            { id: 6, country_id: 3, name: 'Victoria' },
        ]
    }

    getCity() {
        return [
            { id: 1, state_id: 1, name: 'Guntur' },
            { id: 2, state_id: 1, name: 'Vijayawada' },
            { id: 3, state_id: 1, name: 'Nellore' },
            { id: 4, state_id: 1, name: 'Kadapa' },
            { id: 5, state_id: 2, name: 'Warangal' },
            { id: 6, state_id: 2, name: 'Hyderabad' },
            { id: 7, state_id: 2, name: 'Karimnagar' },
            { id: 8, state_id: 2, name: 'Kadapa' },
            { id: 9, state_id: 3, name: 'SOMA' },
            { id: 10, state_id: 3, name: 'Richmond' },
            { id: 11, state_id: 3, name: 'Sunset' },
            { id: 12, state_id: 4, name: 'Burbank' },
            { id: 13, state_id: 4, name: 'Hollywood' },
            { id: 14, state_id: 5, name: 'Sunset' },
            { id: 15, state_id: 5, name: 'Burbank' },
            { id: 16, state_id: 5, name: 'Hollywood' },
            { id: 17, state_id: 6, name: 'Benalla' },
            { id: 18, state_id: 6, name: 'Melbourne' },
        ]
    }
}
