import { Routes, RouterModule } from '@angular/router';
import { Bai7HomeComponent } from 'src/app/bai7.one-way-binding/bai7-home/bai7-home.component';
import { Bai8HomeComponent } from 'src/app/bai8.binding-class-binding-style/bai8-home/bai8-home.component';
import { Bai9HomeComponent } from 'src/app/bai9.event-binding/bai9-home/bai9-home.component';
import { Bai10HomeComponent } from 'src/app/bai10.two-way-binding/bai10-home/bai10-home.component';
import { Bai11HomeComponent } from 'src/app/bai11.structural-directive/bai11-home/bai11-home.component';
import { Bai12HomeComponent } from 'src/app/bai12.attributes-directive/bai12-home/bai12-home.component';
import { Bai14HomeComponent } from 'src/app/bai14-pipes/bai14-home/bai14-home.component';
import { Bai15HomeComponent } from 'src/app/bai15-form/bai15-home/bai15-home.component';
import { Bai16HomeComponent } from 'src/app/bai16.validate-form/bai16-home/bai16-home.component';
import { Bai18HomeComponent } from 'src/app/bai18-http-service/bai18-home/bai18-home.component';
import { Bai13HomeComponent } from 'src/app/bai13-tuong-tac-giua-cac-component/bai13-home/bai13-home.component';
import { Bai21HomeComponent } from 'src/app/bai21-routing/bai21-home/bai21-home.component';

const routes: Routes = [
    { path: "", component: Bai7HomeComponent },
    { path: "bai7", component: Bai7HomeComponent },
    { path: "bai8", component: Bai8HomeComponent },
    { path: "bai9", component: Bai9HomeComponent },
    { path: "bai10", component: Bai10HomeComponent },
    { path: "bai11", component: Bai11HomeComponent },
    { path: "bai12", component: Bai12HomeComponent },
    { path: "bai13", component: Bai13HomeComponent },
    { path: "bai14", component: Bai14HomeComponent },
    { path: "bai15", component: Bai15HomeComponent },
    { path: "bai16", component: Bai16HomeComponent },
    { path: "bai18", component: Bai18HomeComponent },
    { path: "bai21", component: Bai21HomeComponent }
];

export const appRouter = RouterModule.forRoot(routes);