import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/settings';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;
  constructor(
    private settingsService: SettingsService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
      console.log(this.settings)
    });
  }

  onSubmit() {
    this.settingsService.updateSettings(this.settings).then(res => {
      this.flashMessagesService.show('Settings Updated Successfully', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    });
  }

}
