import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  userRole :string = "";
  constructor(private router:Router){

  }

  ngOnInit() {
    console.log(history.state)
    this.userRole = history.state.userRole;
  }

  checkLoginAuth(){
      if(this.username=="superadmin" && this.password=="123456789"){
        alert("Anda dapat masuk");
        this.router.navigateByUrl('/home',{state:
          {userRole: "superadmin"}
        });
      } else if(this.username=="admin" && this.password=="123456789"){
        this.router.navigateByUrl('/home',{state:
          {userRole: "admin"}
        });
      } else {
        alert ("Kredensial Anda salah");
        
      }
    }

}
