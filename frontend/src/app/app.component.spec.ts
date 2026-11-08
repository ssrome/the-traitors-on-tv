import { AppComponent } from "./app.component";
import { provideRouter } from "@angular/router";
import { render } from "@testing-library/angular";
import { CommonModule } from "@angular/common";

describe("AppComponent", () => {
  const setup = async (overrides: any = {}) => {
    const setupTools = await render(AppComponent, {
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
});
