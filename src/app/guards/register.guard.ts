import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(
    public settingService: SettingsService,
    public router: Router
  ) { }

  canActivate(): Observable <boolean> {
    return this.settingService.getSettings().map(settings => {
      if (!settings.showRegister){
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    });
  }
}
