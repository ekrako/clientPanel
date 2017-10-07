import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  // hasBalance: boolean = false;
  disableBalanceOnEdit: boolean = true;
  constructor(
    private clientService: ClientService,
    private settingService: SettingsService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
    this.settingService.getSettings().subscribe((settings) => {
      this.disableBalanceOnEdit = settings.disableBalanceOnEdit;
    });
  }
  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['client/' + this.id + '/edit/']);
    } else {
      this.clientService.updateClient(this.client)
      this.flashMessagesService.show('Client Updated Successfully', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/client/'+this.id]);
    }
  }

}
