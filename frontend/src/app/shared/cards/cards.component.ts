import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.scss",
  imports: [DatePipe, MatCardModule],
})
export class CardsComponent implements OnInit {
  @Input() shows: any = [];
  ngOnInit(): void {}
}
