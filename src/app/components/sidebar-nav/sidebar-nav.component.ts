import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';

interface Anchor {
  name: string;
  href: string;
}

interface Links {
  [key: string]: Anchor[];
}


@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css'
})


export class SidebarNavComponent {
  links:Links = {
    "Payments": [
      { name: "Orders", href: "/developer/quickstart" },
      { name: "Payments", href: "/developer/quickstart" },
      { name: "Downtime", href: "/developer/quickstart" },
      { name: "Settlements", href: "/developer/quickstart" },
      { name: "Refunds", href: "/developer/quickstart" },
      { name: "Disputes", href: "/developer/quickstart" },
      { name: "Documents", href: "/developer/quickstart" },
      { name: "Customers", href: "/developer/quickstart" },
      { name: "Qr Codes", href: "/developer/quickstart" },
      { name: "Documents", href: "/developer/quickstart" },
      { name: "Customers", href: "/developer/quickstart" },
      { name: "Qr Codes", href: "/developer/quickstart" }
    ],
    "Orders": [
      { name: "Orders", href: "/developer/quickstart" },
      { name: "Payments", href: "/developer/quickstart" },
      { name: "Downtime", href: "/developer/quickstart" },
      { name: "Settlements", href: "/developer/quickstart" },
      { name: "Refunds", href: "/developer/quickstart" },
      { name: "Disputes", href: "/developer/quickstart" },
      { name: "Documents", href: "/developer/quickstart" },
      { name: "Customers", href: "/developer/quickstart" },
      { name: "Qr Codes", href: "/developer/quickstart" },
      { name: "Disputes", href: "/developer/quickstart" },
      { name: "Documents", href: "/developer/quickstart" },
      { name: "Customers", href: "/developer/quickstart" },
      { name: "Qr Codes", href: "/developer/quickstart" }
    ]
  };

  categories = Object.keys(this.links);

}
