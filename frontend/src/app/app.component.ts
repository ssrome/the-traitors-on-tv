import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AlgoliaService } from "./core/services/algolia.service";
import { AlgoliaResolver } from "./core/resolvers/algolia.resolver";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [AlgoliaService],
})
export class AppComponent {
  title = "The Traitors on TV";
}
