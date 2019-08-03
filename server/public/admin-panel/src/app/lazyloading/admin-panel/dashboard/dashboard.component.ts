import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'app/services/channel.service';
import { ChaincodeService } from 'app/services/chaincode.service';
import { PeerService } from 'app/services/peer.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Number = 0;
  dids: Number = 0;
  organizations = 0;
  channels: Number = 0;
  chaincodes: Number = 0;
  peers: Number = 0;
  orderers: Number = 0;
  constructor(
    private channelService: ChannelService,
    private peerService: PeerService,
    private userService: UserService,
    private chaincodeService: ChaincodeService
  ) { }

  async ngOnInit() {
    await this.getChannels();
    await this.getChaincodes();
    await this.getPeers();
    await this.getOrderers();
    await this.getAllUsers();
  }

  getChannels() {
    this.channelService.getChannels().subscribe(
      res => {
        this.channels = res.length;
      },
      err => { }
    );
  }
  getChaincodes() {
    this.chaincodeService.listChaincodes().subscribe(
      res => {
        this.chaincodes = res.initiated.length + res.installed.length;
      },
      err => { }
    );
  }
  getPeers() {
    this.peerService.getPeers().subscribe(
      res => {
        this.peers = res.length;
      },
      err => { }
    );
  }
  getOrderers() {
    this.peerService.getOrderers().subscribe(
      res => {
        this.orderers = res.orderers.length;
      },
      err => { }
    );
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      res => {
        const response = res.valueOf();
        if (response['success']) {
          this.users = response['result'].length
        }
      },
      err => { console.log(err); }
    );
  }

}
