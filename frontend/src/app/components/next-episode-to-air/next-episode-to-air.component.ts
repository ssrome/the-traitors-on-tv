import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule, DatePipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-next-episode-to-air",
  templateUrl: "./next-episode-to-air.component.html",
  styleUrl: "./next-episode-to-air.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, DatePipe, MatCardModule],
})
export class NextEpisodeToAirComponent implements OnInit {
  public allShows: any = [];
  public showsNextToAir: any = [];
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.allShows = this.activateRoute.snapshot.data["algolia"][0]?.hits;
    this.filterShows();
  }

  public filterShows(): void {
    this.showsNextToAir = this.allShows.filter(
      (show: any) => show.next_episode_to_air !== null
    );
  }
}
