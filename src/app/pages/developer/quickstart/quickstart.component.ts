import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../../components/main/main.component';
import { RightnavsectionComponent } from '../../../components/rightnavsection/rightnavsection.component';
import { CodeHighlightComponent } from '../../../components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  imports: [MainComponent, RightnavsectionComponent, CodeHighlightComponent],
  templateUrl: './quickstart.component.html',
  styleUrl: './quickstart.component.scss'
})

export class QuickstartComponent implements OnInit {

  nav_list: any = []

  ngOnInit() {
    this.nav_list = [
      { name: 'Get Started' },
      { name: 'Sandbox' },
      { name: 'Run In Postman' },
      { name: 'Authentication' },
      { name: 'Message Structure' },
    ]
  }

  auth_http = `POST /api/user/inq HTTP/2

Host: sandbox.toucanus.net

Accept: application/json, text/plain, */*

Content-Type: application/json; charset=utf-8

X-API-Key: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYXV0YW1AdG91Y2FuIiwiaWF0IjoxNjI2MDk3NzcxLCJle HAiOjE2MjYxMDQ5NzF9.xijHvprs07UqC_wPajAqaL1aRkB3TAUBBp67atP0AFQ

Content-Length: 83

Origin: https://sandbox.toucanus.net

DNT: 1

Connection: keep-alive

Referer: https://sandbox.toucanus.net/

TE: Trailers`;

  http_req_header = `Authorization use X-API-Key tag for authentication

Content Type application/json

Request Method POST`;

  http_request = {
    "messageID": "",
    "requestType": "",
    "object": {
      "id": "60ab2a1e99a7851065f3c795"
    }
  }
}
