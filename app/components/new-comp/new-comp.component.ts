import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
mypic :string="http://www.onlyhdpic.com/images/Collections/hd-pics-photos-flowers-very-attractive-high-definition-desktop-background-wallpaper.jpg";

  constructor() { }

  ngOnInit() {
  }

}
