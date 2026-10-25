import { CommonModule } from "@angular/common";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  public title = "The Traitors on TV";

  ngOnInit(): void {}
}
