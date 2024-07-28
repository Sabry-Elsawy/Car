import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BecomeARenterComponent } from './become-a-renter/become-a-renter.component';
import { RentalDealsComponent } from './rental-deals/rental-deals.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { HomeCarDetailsComponent } from './home-car-details/home-car-details.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'Become-a-renter' , component:BecomeARenterComponent},
  {path:'Rental-deals' , component:RentalDealsComponent},
  {path:'How-it-work' , component:HowItWorkComponent},
  {path:'Why-choose-us' , component:WhyChooseUsComponent},
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'cars' , component:AllCarsComponent},
  {path:'details/:id' , component:DetailsComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
