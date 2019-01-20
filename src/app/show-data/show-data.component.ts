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
  constructor(private dataService: DataService, private router: Router) {  }

  ngOnInit() {
    this.parentData = this.dataService.getData();
  }

  onUpdate(data){
    this.updateSelected = data;
    console.log(data);
  }

  updateDone(){
    this.updateSelected = null;
  }

  onDelete(i){
    this.parentData.splice(i, 1)
  }
}
