import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule, DatePipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, DatePipe, MatCardModule],
})
export class HomeComponent implements OnInit {
  public allShows: any = [];
  public showsNextToAir: any = [];
  public todaysDate: any = Date.now();
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.todaysDate);
    this.allShows = this.activateRoute.snapshot.data["algolia"][0]?.hits;
    this.filterShows();
  }

  public filterShows(): void {
    //.next_episode_to_air.air_date
    // "2026-10-31"
    this.showsNextToAir = this.allShows.filter(
      (show: any) => show.next_episode_to_air !== null,
    );
  }
}
