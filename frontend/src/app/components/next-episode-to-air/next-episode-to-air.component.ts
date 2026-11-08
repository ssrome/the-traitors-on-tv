import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CardsComponent } from "../../shared/cards/cards.component";

@Component({
  selector: "app-next-episode-to-air",
  templateUrl: "./next-episode-to-air.component.html",
  styleUrl: "./next-episode-to-air.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, CardsComponent],
})
export class NextEpisodeToAirComponent implements OnInit {
  public allShows: any = [];
  public showsNextToAir: any = [];
  public todaysDate: any = new Date().toJSON().split("T")[0];
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.data);
    this.allShows = this.activateRoute.snapshot.data["algolia"][0]?.hits;
    this.filterShows();
  }

  public filterShows(): void {
    this.showsNextToAir = this.allShows.filter(
      (show: any) =>
        show.next_episode_to_air !== null &&
        show.next_episode_to_air.air_date >= this.todaysDate,
    );
  }
}
