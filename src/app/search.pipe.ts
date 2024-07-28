import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cars:any[] , searchTerm:string):any[] {
    return  cars.filter((car)=>car.make.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
