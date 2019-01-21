import { Component, OnInit } from '@angular/core';
import { AddUser, dataArray } from '../add-user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public isUpdate = true;
  public id;
  public fullData;
  public updateData;
  
  data = dataArray;
  userModel = new AddUser("shsh", "naga@gm.com", 7417417415, "selam", 741741);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit() {
    this.editData();
  }

  editData() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    });

    if (this.id) {
      this.isUpdate = true;
      this.fullData = this.dataService.getData();
      // this.dataService.getUsers().subscribe(data => {this.fullData = data;});
      this.userModel = this.fullData[this.id];
    }
    else {
      this.isUpdate = false;
    }
  }

  onSubmit(userForm) {
    if (this.isUpdate) {
      this.fullData[this.id] = userForm.value;
    } else {
      // this.dataService.CreateUser(userForm.value).subscribe(data =>{});
      this.data.push(userForm.value);
    }
    this.router.navigate(['showData']);
  }
}
