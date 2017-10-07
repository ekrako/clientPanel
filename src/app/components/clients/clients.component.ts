import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  clients: Client[] = [];
  totalOwed:number;
  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    });

  }

  getTotalOwed(){
      let total:number=0;
      for (let client of this.clients){
        total = total+parseFloat(client.balance.toString());
      }
      this.totalOwed=total;
  }
}
