import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { Arrival } from '../model/arrival';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string;
// baseUrl:string = "http://localhost/angular_admin/php";
baseUrl:string = "https://krishya.co/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username, password) {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public userregistration(name,email,pwd) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
.pipe(map(Users => {
return Users;
}));
}

public arrivalentry(eta_date,in_agent,cont_no,im_name,sh_name,c_lcl_fcl,con_type,con_20,con_40,cargo_name,
    liner_name,bl_no,bl_date,hbl_no,fr_days,load_port,vessel_name,doc_type,voy_no,cfs) {

    return this.httpClient.post<any>(this.baseUrl + '/arrivalentry.php', { eta_date,in_agent, cont_no,im_name,sh_name
    ,c_lcl_fcl,con_type,con_20,con_40,cargo_name,liner_name,bl_no,bl_date,hbl_no,fr_days,load_port,vessel_name,
    doc_type,voy_no,cfs })

    .pipe(map(Arrival => {
        // alert("Success")
        console.log('data successfully added into the server..');
    return Arrival;
    }));

    }

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}