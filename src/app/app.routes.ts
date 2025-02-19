import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent,
    },
    //  Lazy loaded routes
    {
        path: "users",
        loadChildren: () => import("./modules/user/user.module").then((m) => m.UserModule),
    },
    //  Route for handling 404 errors (Page Not Found)
    {
        path: "**",
        component: NotFoundComponent 

    }

];
