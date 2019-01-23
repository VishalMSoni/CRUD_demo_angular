import { Component, OnInit } from '@angular/core';
import { AddUser } from '../add-user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public id;
  public isUpdate = true;
  public updateData = [];

  selectedCountry = 0;
  selectedState = 0;

  countries = [];
  states = [];
  cities = [];

  userModel = new AddUser(null, "vishal", "soni", null, "7417417415", null, null, null, "vms@gmail.com", 360003);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.editData();
    this.countries = this.dataService.getCountries();
  }

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.dataService.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.dataService.getCity().filter((item) => {
      return item.state_id === Number(state_id)
    });
  }

  editData() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    });

    if (this.id) {
      this.isUpdate = true;
      this.dataService.getUserByID(this.id).subscribe(data => {
        this.userModel = data;
        this.selectedCountry = this.userModel.selectedCountry;
        this.onSelectCountry(this.selectedCountry);
        this.selectedState = this.userModel.selectedState;
        this.onSelectState(this.selectedState);
      });
    }
    else {
      this.isUpdate = false;
    }
  }

  onSubmit() {
    if (this.isUpdate) {
      this.dataService.updateUserByID(this.userModel, this.id).subscribe(data => { });
    } else {
      console.log(this.userModel);
      this.dataService.createUsersData(this.userModel).subscribe(data => { });
    }
    this.router.navigate(['showData']);
  }
}
