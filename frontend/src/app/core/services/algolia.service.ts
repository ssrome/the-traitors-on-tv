import { Injectable } from "@angular/core";
import { algoliasearch } from "algoliasearch";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AlgoliaService {
  constructor() {}

  async getAllShows() {
    const appID = environment.algoliaApplicationId ?? null;

    const apiKey = environment.algoliaApiKey ?? null;
    const indexName = environment.algoliaIndex ?? null;

    const client = algoliasearch(appID, apiKey);

    const { results } = await client.search({
      requests: [
        {
          indexName,
        },
      ],
    });

    return results;
  }
}
