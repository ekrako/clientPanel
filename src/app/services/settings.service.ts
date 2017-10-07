import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  settings: AngularFireObject<Settings>;
  constructor(public af: AngularFireDatabase) {
    this.settings = this.af.object('/settings');
  }
  getSettings() {
    return this.settings.valueChanges() as Observable<Settings>;
  }
  updateSettings(settings: Settings) {
    return this.settings.update(settings);
  }

}
