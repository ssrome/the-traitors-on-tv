import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class MenuComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
