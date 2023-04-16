import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http:HttpClient) {}

  busDetails: any = {
    100: {
      busNo: 100,
      regNo: 'KL 6 x 123',
      from: 'Kollam',
      to: 'Kochi',
      departureTime: '06:00AM',
    },
    101: {
      busNo: 101,
      regNo: 'KL 2 x 123',
      from: 'Kollam',
      to: 'Kochi',
      departureTime: '07:00AM',
    },
    102: {
      busNo: 102,
      regNo: 'KL 7 x 123',
      from: 'Idukki',
      to: 'Kochi',
      departureTime: '06:00AM',
    },
    103: {
      busNo: 103,
      regNo: 'KL 8 x 123',
      from: 'Trissur',
      to: 'Kochi',
      departureTime: '06:00AM',
    },
  };

  
  
  search = (from: any, to: any) => {
const data={from:from,to:to}
console.log(data);
return this.http.post('http://localhost:3000/search',data);
   };


  addBus = (busNo: any, regNo: any, from: any, to: any, dTime: any) => {
    const data={busNo: busNo,
                regNo: regNo,
                from: from,
                to: to,
                dTime: dTime}
    console.log(data);
return this.http.post('http://localhost:3000/addBus',data);
    }

  deleteBus=(busNo:any)=>{
      const data={busNo:busNo};
      return this.http.post('http://localhost:3000/delete',data)
    }

    bookBus=(busNo:any,regNo:any,from:any,to:any,dTime:any,email:any,uName:any)=>{
      const data={busNo:busNo,regNo:regNo,from:from,to:to,dTime:dTime,email:email,uName:uName};
      return this.http.post('http://localhost:3000/bookBus',data)
    }
    book=(email:any)=>{
      const data={email:email};
      return this.http.post('http://localhost:3000/book',data)
    }

    update=(busNo:any,obj:any)=>{
      const data={busNo:busNo,obj:obj};
      console.log("UPDATE OBJ ",obj);
      console.log(data);
      return this.http.post('http://localhost:3000/updateBus',data)
    }

    view=(busNo:any,obj:any)=>{
      const data={busNo:busNo,obj:obj};
      console.log("UPDATE OBJ ",obj);
      console.log(data);
      return this.http.post('http://localhost:3000/updateBus',data)
    }
}

