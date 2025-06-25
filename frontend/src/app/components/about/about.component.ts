import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
  imports: [CommonModule],
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
