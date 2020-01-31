import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  onRegister(form){
    console.log("form",form);
    form['email']=form.username;
    console.log("form",form);

     return this.http.post('http://localhost:1337/api/v1/users',form)
    .pipe(map(response =>{
      console.log("resp",response)
    }))
    //   // return this.userData.splice(0);
  }

  onLogin(form){

     return this.http.post('http://localhost:1337/api/v1/users/login',form)
    .pipe(map(response =>{
      console.log("resp",response)
      return response as any
    }))
    //   // return this.userData.splice(0);
  }
  getProducts(){
    return this.http.get('http://localhost:1337/api/v1/products')
    .pipe(map(response =>{
      console.log("resp",response)
      return response as any
    }))
  }

  buy(data){

    let id=JSON.parse(localStorage.getItem('userId'))
   return this.http.post('http://localhost:1337/api/v1/products/buy/users/'+id,data)
    .pipe(map(response =>{
      console.log("resp",response)
      return response as any
    }))
  }

  getUserStock(){

    let id=JSON.parse(localStorage.getItem('userId'));
   return this.http.get('http://localhost:1337/api/v1/stocks/users/'+id)
    .pipe(map(response =>{
      console.log("resp",response)
      return response as any
    }))    
  }
}
