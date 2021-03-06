import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// Angular Fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Components imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services import
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';
import { WindowService } from './services/window.service';

// Material Design imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';

// Phone number

// Routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'phone', component: PhoneLoginComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'add-client', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  { path: 'client/:id/edit', component: EditClientComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }

];

export const firebaseConfig = {
  apiKey: 'AIzaSyA-47flyz64__yOOLy3s52BTBTljxTUQoI',
  authDomain: 'clientpanel-241d3.firebaseapp.com',
  databaseURL: 'https://clientpanel-241d3.firebaseio.com',
  storageBucket: 'clientpanel-241d3.appspot.com',
  messagingSenderId: '708952993015'
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [
    ClientService,
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
