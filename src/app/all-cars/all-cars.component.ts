// import { Component } from '@angular/core';
// import { ApisService } from '../apis.service';
// import { Router } from '@angular/router';
  
// @Component({
//   selector: 'app-all-cars',
//   templateUrl: './all-cars.component.html',
//   styleUrls: ['./all-cars.component.scss']
// })
// export class AllCarsComponent {
//   cars:any[]=[]
//  searchTerm:string=''

//  constructor(private _ApisService:ApisService , private _Router:Router){
//   _ApisService.getAllCars().subscribe({
//     next:(data)=> {
//       this.cars=data
//       // console.log(this.cars);
      
//     },
//     error:(err)=>{
//       alert(err)
//     },
//     complete:()=>{
//       console.log('Done')
//     }
    
//    });
//  }

// }




import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  cars: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 12; 
  totalPages: number = 0;

  constructor(private apisService: ApisService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllCars();
  }

  fetchAllCars(): void {
    this.apisService.getAllCars().subscribe({
      next: (data) => {
        this.cars = data;
        this.totalPages = Math.ceil(this.cars.length / this.itemsPerPage);
      },
      error: (err) => {
        alert('Failed to fetch cars: ' + err.message);
      },
      complete: () => {
        console.log('Done');
      }
    });
  }

  get filteredCars(): any[] {
    return this.cars.filter(car =>
      car.make.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedCars(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredCars.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}


 