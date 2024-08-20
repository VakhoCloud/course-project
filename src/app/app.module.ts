import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
  providers: [LoggingService]
})
export class AppModule {}
