import { Component, OnInit } from '@angular/core';
import {BackandService} from 'angular2bknd-sdk';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {


	name:string = '';
    description:string = '';
    quantidade:string= '';
    public items:any[] = [];
    searchQuery: string;

    constructor(public backandService:BackandService) {   
        this.searchQuery = '';
      
        this.backandService.on("items_updated")
            .subscribe(
                data => {
                    console.log("items_updated", data);
                    let a = data as any[];
                    let newItem = {};
                    a.forEach((kv)=> newItem[kv.Key] = kv.Value);
                    this.items.unshift(newItem);
                },
                err => {
                    console.log(err);
                },
                () => console.log('received update from socket')
        );

    }

    public postItem() {
        let item = {
            name: this.name, 
            description: this.description
        };

        this.backandService.create('Cliente', item).subscribe(
                data => {
                    // add to beginning of array
                    this.items.unshift({ id: null, name: this.name, description: this.description });
                    console.log(this.items);
                    this.name = '';
                    this.description = '';
                    this.quantidade= '';
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }

    public getItems() {
       this.backandService.getList('Cliente')
            .subscribe(
                data => {
                    console.log(data);
                    this.items = data;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }

    public filterItems() {
        // set q to the value of the searchbar
        var q = this.searchQuery;

        // if the value is an empty string don't filter the items
        if (!q || q.trim() == '') {
          return;
        }
        else{
            q = q.trim();
        }

        let filter = 
            [
              {
                fieldName: 'name',
                operator: 'contains',
                value: q
              }
            ]
        ;


        this.backandService.getList('Cliente', null, null, filter)
            .subscribe(
                data => {
                    console.log("subscribe", data);
                    this.items = data;
                },
                err => this.backandService.logError(err),
                () => console.log('OK')
            );
    }

}

