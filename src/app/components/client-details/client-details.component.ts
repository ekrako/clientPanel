import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    private clientService: ClientService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      this.hasBalance = client.balance > 0;
      this.client = client;
    });
  }
  updateBalance() {
    this.clientService.updateClient(this.client)
      .then(_ => {
        this.flashMessagesService.show('Balance Updated', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/client/' + this.id]);
        this.showBalanceUpdateInput = false;
      })
  }

  onDeleteClick() {
    if (confirm("Are you sure you want to delete '"+this.client.firstName+" "+this.client.lastName+"' ?")) {
      this.clientService.deleteClient(this.id)
        .then(_ => {
          this.flashMessagesService.show('Client deleted successfully', { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/']);
        })
    }
  }

}
