import { Injectable } from '@angular/core';
import { dataArray } from './add-user';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    data = [];

    getData() {
        return dataArray;
    }
}
