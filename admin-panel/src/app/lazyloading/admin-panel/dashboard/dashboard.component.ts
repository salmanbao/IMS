import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChannelService } from 'app/services/channel.service';
import { ChaincodeService } from 'app/services/chaincode.service';
import { PeerService } from 'app/services/peer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  channels: Number = 0;
  chaincodes: Number = 0;
  peers: Number = 0;
  orderers: Number = 0;
  constructor(
    private channelService: ChannelService,
    private peerService: PeerService,
    private chaincodeService: ChaincodeService
  ) { }
  getChannels() {
    this.channelService.getChannels().subscribe(
      res => {
        this.channels = res.length;
      },
      err => {}
    );
  }
  getChaincodes(){
    this.chaincodeService.listChaincodes().subscribe(
      res => {
        this.chaincodes = res.initiated.length + res.installed.length;
      },
      err => {}
    );
  }
  getPeers(){
    this.peerService.getPeers().subscribe(
      res => {
        this.peers = res.length;
      },
      err => {}
    );
  }
  getOrderers(){
    this.peerService.getOrderers().subscribe(
      res => {
        this.orderers = res.orderers.length;
      },
      err => {}
    );
  }

  ngOnInit() {
    this.getChannels();
    this.getChaincodes();
    this.getPeers();
    this.getOrderers();
  
  }

}
