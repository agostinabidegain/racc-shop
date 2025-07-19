import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NecklaceListComponent } from './necklace-list/necklace-list.component';

import { FormsModule } from '@angular/forms';
import { RaccAboutComponent } from './racc-about/racc-about.component';
import { RaccNecklacesComponent } from './racc-necklaces/racc-necklaces.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    NecklaceListComponent,
    RaccAboutComponent,
    RaccNecklacesComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
