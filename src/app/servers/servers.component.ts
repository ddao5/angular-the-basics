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
  constructor() {}

  ngOnInit(): void {}
}
