import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from 'app/services/api.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages;
  displayedColumns: string[] = [
    'timestamp',
    'relationshipName',
    'type',
    'action'
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private indyAPI: ApiService,
    private changeDetect: ChangeDetectorRef
  ) {
  }

  async ngOnInit() {
    this.dataSource.sort = this.sort;
    await this.loadMessages();
    await this.changeDetect.detectChanges();
  }
  loadMessages() {
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        this.messages = res['messages'];
        if (this.messages.length > 0) {
          for (const msg of this.messages) {
            this.dataSource.data.push({
              relationshipName: msg['relationshipName'],
              message: msg['message']['message'],
              type: msg['message']['type'],
              messageTypes: res['messageTypes'],
              timestamp: msg['timestamp'],
              links: msg['links']
            });
          }
        }

        this.dataSource._updateChangeSubscription();
      },
      err => { }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  request(href, method, message) {
    const msg = JSON.parse(message);
    this.indyAPI.generalRequest(href, msg.messageId).subscribe(
      res => {
        if (res['success']) {
          this.loadMessages();
          setTimeout(() => {
            this.changeDetect.detectChanges();
          }, 5000)
        }
      },
      err => { }
    );
  }


}