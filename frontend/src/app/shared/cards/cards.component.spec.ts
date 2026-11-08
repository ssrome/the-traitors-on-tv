import { render, within } from "@testing-library/angular";
import { CardsComponent } from "./cards.component";
import * as TestData from "../../../test-data/show";
import { CommonModule } from "@angular/common";

const show = TestData.show;

describe("CardsComponent", () => {
  const setup = async (overrides: any = {}) => {
    const setupTools = await render(CardsComponent, {
      imports: [CommonModule],
      componentProperties: {
        shows: overrides?.shows ?? [],
      },
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

  it("should show a message when there's no shows", async () => {
    const { getByTestId } = await setup();

    const testId = getByTestId("no-shows");

    expect(testId).toBeTruthy();
    expect(
      within(testId).getByText("There are no shows airing today."),
    ).toBeTruthy();
  });

  it("should display cards", async () => {
    const overrides = { shows: [show] };
    const { getByTestId } = await setup(overrides);

    expect(getByTestId("cards")).toBeTruthy();
  });

  it("should display the show name", async () => {
    const overrides = { shows: [show] };
    const { getByTestId } = await setup(overrides);

    const testId = getByTestId(`show-name-${show.id}`);

    expect(
      within(testId).getByText(
        `${show.original_name} (${show.origin_country[0]})`,
      ),
    ).toBeTruthy();
  });

  it("should display the air date", async () => {
    const overrides = { shows: [show] };
    const { getByTestId } = await setup(overrides);

    const testId = getByTestId(`air-date-${show.id}`);

    expect(within(testId).getByText("Apr 13, 2025")).toBeTruthy();
  });

  it("should display the season and episode numbers", async () => {
    const overrides = { shows: [show] };
    const { getByTestId } = await setup(overrides);

    const testId = getByTestId(`season-episode-${show.id}`);

    expect(
      within(testId).getByText(
        `S${show.next_episode_to_air.season_number} Ep.${show.next_episode_to_air.episode_number}`,
      ),
    ).toBeTruthy();
  });
});
