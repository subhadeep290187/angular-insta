import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-nif',
  templateUrl: './ng-for-nif.component.html',
  styleUrls: ['./ng-for-nif.component.css']
})
export class NgForNIfComponent implements OnInit {

  constructor() { }
  user = '';
  listOfUser = [];
  addToList(){
      const obj = {
          username: this.user,
          id:Math.floor(Math.random()*10)
      }
      debugger
      this.listOfUser.push(obj);
      console.log(this.listOfUser)
  }
  ngOnInit(): void {
  }

}
