import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BecomeARenterComponent } from './become-a-renter/become-a-renter.component';
import { RentalDealsComponent } from './rental-deals/rental-deals.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GetDataComponent } from './get-data/get-data.component';
import {HttpClientModule} from '@angular/common/http';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { WorkComponent } from './work/work.component';
import { HomeCarDetailsComponent } from './home-car-details/home-car-details.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
 
 
 
 


@NgModule({
  declarations: [
    AppComponent,
    BecomeARenterComponent,
    RentalDealsComponent,
    HowItWorkComponent,
    WhyChooseUsComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    NotfoundComponent,
    NavBarComponent,
    GetDataComponent,
    AllCarsComponent,
    WorkComponent,
    HomeCarDetailsComponent,
    ContactComponent,
    FooterComponent,
    DetailsComponent,
    SearchPipe,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
