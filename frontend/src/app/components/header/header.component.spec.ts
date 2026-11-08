import { HeaderComponent } from "./header.component";
import { render, within } from "@testing-library/angular";
import { CommonModule } from "@angular/common";

describe("HeaderComponent", () => {
  const setup = async (overrides: any = {}) => {
    const setupTools = await render(HeaderComponent, {
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

  it("should display the title", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("title");

    expect(testId).toBeTruthy();
    expect(within(testId).getByText("The Traitors On TV")).toBeTruthy();
  });
});
