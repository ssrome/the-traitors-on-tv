import { HomeComponent } from "./home.component";
import { ActivatedRoute } from "@angular/router";
import * as TestData from "../../../test-data/show";
import { render } from "@testing-library/angular";
import { AlgoliaService } from "../../core/services/algolia.service";
import { MockAlgoliaService } from "../../core/test-utils/MockAlgoliaService";

const show = TestData.show;

describe("HomeComponent", () => {
  const setup = async (overrides: any = {}) => {
    const setupTools = await render(HomeComponent, {
      imports: [HomeComponent],
      providers: [
        { provide: AlgoliaService, useClass: MockAlgoliaService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {},
              data: {
                algolia: [
                  {
                    hits: [show],
                  },
                ],
              },
            },
          },
        },
      ],
    });

    return {
      ...setupTools,
      component: setupTools.fixture.componentInstance,
    };
  };

  it("should create", async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it("should render page title", async () => {
    const { getByText } = await setup();

    expect(getByText("On Today")).toBeTruthy();
  });
});
