import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  typeValue:string = 'password';
  isPassword:boolean = true;
  eye = faEye;
  showPasswdIcon = this.eye;
  crossEye = faEyeSlash
  constructor() {   }

  showHide():void{
    if(this.isPassword){
      this.isPassword = false;
      this.typeValue = 'text';
      this.showPasswdIcon = this.crossEye;
    }else{
      this.isPassword = true;
      this.typeValue = 'password';
      this.showPasswdIcon = this.eye;
    }
  }

  ngOnInit(): void {
  }

}
