import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: Array<any> = [
    {title: 'Home', top: "140px", hovered: false, sub: ['Sub OnePointOne', 'Sub OnePointTwo', 'Sub OnePointThree', 'Sub OnePointFour']},
    {title: 'Contact Us', top: "200px", hovered: false, sub: ['Sub TwoPointOne', 'Sub TwoPointOne', 'Sub TwoPointOne', 'Sub TwoPointOne']},
    {title: 'About Us', top: "260px", hovered: false, sub: ['Sub ThreePointOne', 'Sub ThreePointOne', 'Sub ThreePointOne', 'Sub ThreePointOne', 'Sub ThreePointOne']},
  ];

 @ViewChild('sidebar') sidebar : MatSidenav;

  close() {
    this.sidebar.close();
  }
  constructor() { }

  ngOnInit() {
  }

  mouseEnterMain(i: number) {
    this.menuItems.forEach((v => v.hovered = false));
    this.menuItems[i].hovered = true;
  }

  mouseLeaveSub(i: number) {
    this.menuItems[i].hovered = false;
  }

  mouseLeaveReg() {
    this.menuItems.forEach((v => v.hovered = false));
  }
}
