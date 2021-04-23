import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HomeModule} from './home/home.module';
import {ListProductsModule} from './list-products/list-products-module';
import {routes} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PanierModule} from './panier/panier.module';
import {AuthModule} from './auth/auth.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpErrorInterceptorService} from './shared/http-error-interceptor.service';
import {UsersModule} from "./users/users.module";
import {ToastrModule} from "ngx-toastr";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        ToastrModule,
        MatMenuModule,
        MatCardModule,
        AuthModule,
        UsersModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        HomeModule,
        ListProductsModule,
        PanierModule,
        FlexLayoutModule,
        RouterModule.forRoot(routes)
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
