import { Injectable } from "@angular/core";
import { algoliasearch } from "algoliasearch";
import { environment } from "../../../environments/environment.local";

@Injectable({
  providedIn: "root",
})
export class AlgoliaService {
  constructor() {}

  async getAll() {
    const appID = environment.algoliaApplicationId;

    const apiKey = environment.algoliaApiKey;
    const indexName = environment.algoliaIndex;

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
