import { Injectable } from "@angular/core";
import { AlgoliaService } from "../services/algolia.service";
import * as TestData from "../../../test-data/show";

const show = TestData.show;

@Injectable()
export class MockAlgoliaService extends AlgoliaService {
  public static getAllShowsFactory() {
    return {
      algolia: {
        0: {
          hits: [show],
        },
      },
    };
  }
}
