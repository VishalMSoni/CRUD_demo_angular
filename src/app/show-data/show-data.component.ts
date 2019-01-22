import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-show-data',
    templateUrl: './show-data.component.html',
    styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

    public updateSelected;
    public parentData = [];
    constructor(private dataService: DataService, private router: Router) { }

    key: string = 'First Name';
    reverse: boolean = false;
    p: number = 1;

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    ngOnInit() {
        this.dataService.getUsersData().subscribe(data => { this.parentData = data; });
    }

    onUpdate(i) {
        console.log(this.parentData);
        this.router.navigate(['editData', i]);
    }

    onDelete(i) {
        if(window.confirm("Are you sure ??")){
            this.dataService.deleteUserByID(i).subscribe(data => { });
        }
    }
}
