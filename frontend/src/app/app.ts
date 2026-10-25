import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AlgoliaService } from "./core/services/algolia.service";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [AlgoliaService],
})
export class App {
  title = "The Traitors on TV";
}
