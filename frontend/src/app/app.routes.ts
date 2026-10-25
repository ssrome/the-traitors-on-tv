import { Routes } from "@angular/router";
import { AlgoliaResolver } from "./core/resolvers/algolia.resolver";
import { NextEpisodeToAirComponent } from "./components/next-episode-to-air/next-episode-to-air";
import { About } from "./components/about/about";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "next-episode-to-air",
    pathMatch: "full",
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
    component: About,
    title: "About",
    resolve: {
      algolia: AlgoliaResolver,
    },
  },
];
