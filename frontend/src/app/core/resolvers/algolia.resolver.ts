import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn } from "@angular/router";
import { AlgoliaService } from "../services/algolia.service";

@Injectable({
  providedIn: "root",
})
export class AlgoliaResolver implements Resolve<any> {
  constructor(private algolia: AlgoliaService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.algolia.getAll();
  }
}
