import { Component, OnInit } from '@angular/core';
import { AddUser, dataArray } from '../add-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public isUpdate = true;
  public id;
  data = dataArray;
  userModel = new AddUser("shsh", "naga@gm.com", 7417417415, "selam", 741741);
  constructor(private router: Router) { }

  ngOnInit(){

  }

  onSubmit(userForm) {
    this.data.push(userForm.value);
    this.router.navigate(['showData']);
  }
}
