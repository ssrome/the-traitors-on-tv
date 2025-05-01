import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  public title = "The Traitors on TV";

  ngOnInit(): void {}
}
