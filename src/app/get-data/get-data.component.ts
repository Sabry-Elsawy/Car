import { Component } from '@angular/core';
import { ApisService } from '../apis.service';
@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {

  cars:any[]=[]
  searchTerm:string=''

 constructor(private _ApisService:ApisService){
  _ApisService.getData().subscribe({
    next:(data)=> {
      this.cars=data
      // console.log(this.cars);
      
    },
    error:(err)=>{
      // alert(err)
    },
    complete:()=>{
      console.log('Done')
    }
    
   });
 }

 
 

}
