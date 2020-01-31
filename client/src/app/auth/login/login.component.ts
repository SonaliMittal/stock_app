import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,  private router: Router) {
    localStorage.clear();
   }

  ngOnInit() {
   
  }
  onLogin(data){
    let formData={};
    formData['email']=data.form.value.username;
    formData['password']=data.form.value.password;
    this.authService.onLogin(formData).subscribe((data)=>{
       localStorage.setItem("userId",JSON.stringify(data.user_info.id));
       localStorage.setItem("token",JSON.stringify(data.user_info.token));

      this.router.navigate(['/products']);
    })

  }
}
