import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai7HomeComponent } from './bai7.one-way-binding/bai7-home/bai7-home.component';
import { Bai7InterpolationComponent } from './bai7.one-way-binding/bai7-interpolation/bai7-interpolation.component';
import { Bai7PropertyBindingComponent } from './bai7.one-way-binding/bai7-property-binding/bai7-property-binding.component';
import { MenuComponent } from './menu/menu.component';
import { Bai8HomeComponent } from './bai8.binding-class-binding-style/bai8-home/bai8-home.component';
import { Bai8BindingClassComponent } from './bai8.binding-class-binding-style/bai8-binding-class/bai8-binding-class.component';
import { Bai8BindingStyleComponent } from './bai8.binding-class-binding-style/bai8-binding-style/bai8-binding-style.component';
import { Bai9HomeComponent } from './bai9.event-binding/bai9-home/bai9-home.component';
import { Bai10HomeComponent } from './bai10.two-way-binding/bai10-home/bai10-home.component';
import { Bai11HomeComponent } from './bai11.structural-directive/bai11-home/bai11-home.component';
import { Bai12HomeComponent } from './bai12.attributes-directive/bai12-home/bai12-home.component';
import { Bai13HomeComponent } from './bai13-tuong-tac-giua-cac-component/bai13-home/bai13-home.component';
import { Bai13ChildComponent } from './bai13-tuong-tac-giua-cac-component/bai13-child/bai13-child.component';
import { Bai13Child2Component } from './bai13-tuong-tac-giua-cac-component/bai13-child2/bai13-child2.component';
import { Bai13Child3Component } from './bai13-tuong-tac-giua-cac-component/bai13-child3/bai13-child3.component';
import { Bai14HomeComponent } from './bai14-pipes/bai14-home/bai14-home.component';
import { Bai15HomeComponent } from './bai15-form/bai15-home/bai15-home.component';
import { Bai16HomeComponent } from './bai16.validate-form/bai16-home/bai16-home.component';
import { Bai18HomeComponent } from './bai18-http-service/bai18-home/bai18-home.component';
import { appRouter } from 'src/router/app.router';
import { Bai21HomeComponent } from './bai21-routing/bai21-home/bai21-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GetParamComponent } from './get-param/get-param.component';
import { Bai24HomeComponent } from './bai24-child-route/bai24-home/bai24-home.component';
import { Bai24Tab1Component } from './bai24-child-route/bai24-tab1/bai24-tab1.component';
import { Bai24Tab2Component } from './bai24-child-route/bai24-tab2/bai24-tab2.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from 'src/guard/home.guard';
import { Bai25RouteGuardComponent } from './bai25-route-guard/bai25-route-guard.component';
import { PanigationComponent } from './panigation/panigation.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai7HomeComponent,
    Bai7InterpolationComponent,
    Bai7PropertyBindingComponent,
    MenuComponent,
    Bai8HomeComponent,
    Bai8BindingClassComponent,
    Bai8BindingStyleComponent,
    Bai9HomeComponent,
    Bai10HomeComponent,
    Bai11HomeComponent,
    Bai12HomeComponent,
    Bai13HomeComponent,
    Bai13ChildComponent,
    Bai13Child2Component,
    Bai13Child3Component,
    Bai14HomeComponent,
    Bai15HomeComponent,
    Bai16HomeComponent,
    Bai18HomeComponent,
    Bai21HomeComponent,
    NotFoundComponent,
    GetParamComponent,
    Bai24HomeComponent,
    Bai24Tab1Component,
    Bai24Tab2Component,
    LoginComponent,
    HomeComponent,
    Bai25RouteGuardComponent,
    PanigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    appRouter,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
