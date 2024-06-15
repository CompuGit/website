import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [NgFor],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {
  navs = [
    {
      name: "Home",
      href: "/developer/quickstart"
    },
    {
      name: "Products",
      href: "/developer/quickstart"
    },
    {
      name: "Solutions",
      href: "/developer/quickstart"
    },
    {
      name: "Resources",
      href: "/developer/quickstart"
    },
    {
      name: "Developer",
      href: "/developer/quickstart"
    },
    {
      name: "About Us",
      href: "/developer/quickstart"
    },
  ];
}
