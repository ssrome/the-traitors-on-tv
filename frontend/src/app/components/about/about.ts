import { CommonModule } from "@angular/common";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.html",
  styleUrl: "./about.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule],
})
export class About implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
