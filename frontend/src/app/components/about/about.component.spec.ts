import { AboutComponent } from "./about.component";
import { render, within } from "@testing-library/angular";
import { CommonModule } from "@angular/common";

describe("AboutComponent", () => {
  const setup = async (overrides: any = {}) => {
    const setupTools = await render(AboutComponent, {
      imports: [CommonModule],
      componentProperties: {},
    });

    const component = setupTools.fixture.componentInstance;

    return {
      ...setupTools,
      component,
    };
  };

  it("should create", async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it("should contain credit text", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("credits");

    expect(testId).toBeTruthy();
  });

  it("should contain the following TMDB related text", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("tmdb-credit");

    expect(testId).toBeTruthy();
    expect(
      within(testId).getByText(
        "This product uses the TMDB API but is not endorsed or certified by TMDB.",
      ),
    ).toBeTruthy();
  });

  it("should contain the following Algolia related text", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("algolia-credit");

    expect(testId).toBeTruthy();
    expect(
      within(testId).getByText("It is also powered by Algolia."),
    ).toBeTruthy();
  });
});
