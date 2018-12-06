import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: Array<any> = [
    {title: 'Home', top: "130px", hovered: false, sub: ['sub OnePointOne', 'sub 1.2', 'sub 1.3', 'sub 1.4']},
    {title: 'Contact Us', top: "170px", hovered: false, sub: ['sub 2.1', 'sub 2.2', 'sub 2.3']},
    {title: 'About Us', top: "200px", hovered: false, sub: ['sub 3.1', 'sub 3.2', 'sub 3.3', 'sub 3.4', 'sub 3.5']},
  ];

 @ViewChild('sidebar') sidebar : MatSidenav;

  close() {
    this.sidebar.close();
  }
  constructor() { }

  ngOnInit() {
  }

  mouseEnter(i: number) {
    console.log(i);
    this.menuItems.forEach((v => v.hovered = false));
    this.menuItems[i].hovered = true;
  }

  mouseLeave(i: number) {
    this.menuItems.forEach((v => v.hovered = false));
  }
}
