import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CardsComponent } from "../../shared/cards/cards.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, CardsComponent],
})
export class HomeComponent implements OnInit {
  public allShows: any = [];
  public showsAiringToday: any = [];
  public todaysDate: any = new Date().toJSON().split("T")[0];
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.allShows = this.activateRoute.snapshot.data["algolia"][0]?.hits;
    this.filterShows();
  }

  public filterShows(): void {
    this.showsAiringToday = this.allShows.filter(
      (show: any) =>
        show.next_episode_to_air !== null &&
        show.next_episode_to_air.air_date === this.todaysDate,
    );
  }
}
