import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

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
      { name: "Link 1", href: "" },
      { name: "Link 2", href: "" },
      { name: "Link 3", href: "" },
      { name: "Link 4", href: "" },
      { name: "Link 5", href: "" },
      { name: "Link 6", href: "" },
      { name: "Link 7", href: "" },
      { name: "Link 8", href: "" },
      { name: "Link 9", href: "" },
      { name: "Link 10", href: "" },
      { name: "Link 11", href: "" },
      { name: "Link 12", href: "" },
    ],
    "Orders": [
      { name: "Orders", href: "/developer/quickstart" },
      { name: "Link 1", href: "" },
      { name: "Link 2", href: "" },
      { name: "Link 3", href: "" },
      { name: "Link 4", href: "" },
      { name: "Link 5", href: "" },
      { name: "Link 6", href: "" },
      { name: "Link 7", href: "" },
      { name: "Link 8", href: "" },
      { name: "Link 9", href: "" },
      { name: "Link 10", href: "" },
      { name: "Link 11", href: "" },
      { name: "Link 12", href: "" },
    ]
  };

  categories = Object.keys(this.links);

}
