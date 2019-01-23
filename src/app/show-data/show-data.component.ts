import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ExcelService } from '../excel.service';

@Component({
    selector: 'app-show-data',
    templateUrl: './show-data.component.html',
    styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

    public updateSelected;
    public parentData = [];
    public deleteID;
    public fullName;
    public countries = [];
    public states = [];
    public cities = [];

    constructor(private dataService: DataService, private router: Router, private excelService: ExcelService) {
        this.countries = this.dataService.getCountries();
        this.states = this.dataService.getStates();
        this.cities = this.dataService.getCity();
    }

    key: string = 'First Name';
    reverse: boolean = false;
    p: number = 1;

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    ngOnInit() {
        this.dataService.getUsersData().subscribe(data => {
            this.parentData = data;
            console.log(this.parentData);
        });
    }

    getCountry(i) {
        return this.countries[i - 1].name;
    }

    getState(j) {
        return this.states[j - 1].name;
    }

    getCity(k) {
        return this.cities[k - 1].name;
    }

    setDeleteID(deleteID, fname, lname){
        this.deleteID = deleteID;
        this.fullName = fname + ' ' + lname;
    }

    onUpdate(i) {
        this.router.navigate(['editData', i]);
    }

    onDelete() {
        this.dataService.deleteUserByID(this.deleteID).subscribe(data => { });
    }

    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.parentData, 'sample');
    }
}

