import { Routes } from "@angular/router";
import { AlgoliaResolver } from "./core/resolvers/algolia.resolver";
import { NextEpisodeToAirComponent } from "./components/next-episode-to-air/next-episode-to-air.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    title: "The Traitors On TV",
    resolve: {
      algolia: AlgoliaResolver,
    },
  },
  {
    path: "next-episode-to-air",
    component: NextEpisodeToAirComponent,
    title: "Next Episode To Air",
    resolve: {
      algolia: AlgoliaResolver,
    },
  },
  {
    path: "about",
    component: AboutComponent,
    title: "About",
    resolve: {
      algolia: AlgoliaResolver,
    },
  },
];
