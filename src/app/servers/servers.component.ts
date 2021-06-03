import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //below is not recommened for Angular components
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Testserver';
  username: string = '';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver2'];
  secretContent: string = 'Yo what\'s up';
  shouldDisplay: boolean = false;
  displayLogs = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}.`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onClickButtonUserName(): void {
    this.username = '';
  }
  onClickDisplayDetails(): void {
    this.shouldDisplay = !this.shouldDisplay;
    this.displayLogs.push(Date.now());
  }
  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
