import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent }
      ]
    },
    {
      path: 'servers',
    //   canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: ServersComponent,
      children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
      ]
    },
    // {path: 'notfound', component: PageNotFoundComponent},
    {path: 'notfound', component: ErrorMessagesComponent, data: {messages: 'Page not found'}},
    {path: '**', redirectTo: '/notfound'}
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
