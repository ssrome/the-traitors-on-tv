import { MenuComponent } from "./menu.component";
import { provideRouter } from "@angular/router";
import { render, within } from "@testing-library/angular";
import { CommonModule } from "@angular/common";

describe("MenuComponent", () => {
  const setup = async (overrides: any = {}) => {
    const setupTools = await render(MenuComponent, {
      imports: [CommonModule],
      componentProperties: {},
      providers: [provideRouter([])],
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

  it("should display home link", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("home-link");

    expect(testId).toBeTruthy();
    expect(within(testId).getByText("Home")).toBeTruthy();
  });

  it("should display next episode to air link", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("next-episode-link");

    expect(testId).toBeTruthy();
    expect(within(testId).getByText("Next Episode To Air")).toBeTruthy();
  });

  it("should display about link", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("about-link");

    expect(testId).toBeTruthy();
    expect(within(testId).getByText("About")).toBeTruthy();
  });
});
