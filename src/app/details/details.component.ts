import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApisService: ApisService
  ) {}
  productId: any;
  carsDetails:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => (this.productId = params.get('id')),
    });

    this._ApisService.getDetailsCar(this.productId).subscribe({
      next:(response)=> {
    this.carsDetails=response
        console.log(this.carsDetails);
      },
      error:(err)=>console.log(err)
      
      
    })
  }
}

