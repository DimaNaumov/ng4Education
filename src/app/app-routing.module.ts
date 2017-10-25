import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
    { path: 'app', component: AppComponent },
    //{ path: 'hero/:id',      component: HeroDetailComponent },
    {
      path: 'login',
      component: LoginComponent,
      data: { title: '' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { title: '' }
      },
    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: LoginComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}