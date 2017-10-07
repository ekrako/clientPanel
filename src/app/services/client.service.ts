import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
@Injectable()
export class ClientService {
  clients: AngularFireList<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.clients = this.af.list('/clients');
}
   getClients(){
     return this.clients.valueChanges();
   }

   newClient(client:Client){
     let push = this.clients.push(client as any[]);
     client.key = push.key;
     this.clients.update(client.key,client as any[]);
   }

   getClient(id:string){
     return this.af.object('/clients/'+id).valueChanges() as Observable<Client>;
   }
   updateClient(client:Client){
      return this.af.object('/clients/'+client.key).set(client);
   }

   deleteClient(id){
     return this.clients.remove(id);
   }

}
