import { Component, inject, OnInit } from "@angular/core";
import { AlgoliaService } from "../../core/services/algolia.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { CommonModule, DatePipe } from "@angular/common";

@Component({
  selector: "app-next-episode-to-air",
  templateUrl: "./next-episode-to-air.component.html",
  styleUrl: "./next-episode-to-air.component.scss",
  imports: [CommonModule, DatePipe],
})
export class NextEpisodeToAirComponent implements OnInit {
  public allShows: any = [];
  public showsNextToAir: any = [];
  constructor(private activateRoute: ActivatedRoute) {
    // this.allShows = this.activateRoute.snapshot.data["algolia"][0]?.hits;
    // this.filterShows();
  }

  ngOnInit(): void {
    this.allShows = this.activateRoute.snapshot.data["algolia"][0]?.hits;
    this.filterShows();
    // this.sortShows();
    console.log(this.allShows);
  }

  public filterShows(): void {
    this.showsNextToAir = this.allShows.filter(
      (show: any) => show.next_episode_to_air !== null
    );
  }

  public sortShows(): void {
    this.showsNextToAir = this.allShows.sort(
      (a: any, b: any) =>
        a.next_episode_to_air.air_date - b.next_episode_to_air.air_date
    );
  }

  //https://image.tmdb.org/t/p/w440_and_h660_face/${{show?.poster_path}}
}
