import { Component} from '@angular/core';
import { MainComponent } from '../../../components/main/main.component';
import { CodeHighlightComponent } from '../../../components/code-highlight/code-highlight.component';
import { OnPageNavigationComponent } from '../../../components/on-page-navigation/on-page-navigation.component';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  imports: [MainComponent, CodeHighlightComponent, OnPageNavigationComponent],
  templateUrl: './quickstart.component.html',
  styleUrl: './quickstart.component.scss'
})

export class QuickstartComponent {

  anchors = [
    {
      name: "Get Started",
      href: "/developer/quickstart#get_started"
    },
    {
      name: "Sandbox",
      href: "/developer/quickstart#sandbox"
    },
    {
      name: "Run In Postman",
      href: "/developer/quickstart#run_in_postman"
    },
    {
      name: "Authentication",
      href: "/developer/quickstart#authentication"
    },
    {
      name: "Message Structure",
      href: "/developer/quickstart#message_structure"
    },
    {
      name: "Http Request Header",
      href: "/developer/quickstart#http_req_header"
    },
    {
      name: "Http Request Data Structure",
      href: "/developer/quickstart#http_req"
    },
  ];


  auth_http = `POST /api/user/inq HTTP/2

Host: sandbox.toucanus.net

Accept: application/json, text/plain, */*

Content-Type: application/json; charset=utf-8

X-API-Key: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYXV0YW1AdG91Y2FuIiwiaWF0IjoxNjI2MDk3NzcxLCJle

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
