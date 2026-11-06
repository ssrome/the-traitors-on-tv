import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardsComponent } from "./cards.component";
import { inputBinding, signal } from "@angular/core";

describe("CardsComponent", () => {
  const show = {
    adult: false,
    backdrop_path: "/tiY1TFt7yVrlGSHqttXAfvcRwMj.jpg",
    created_by: [],
    episode_run_time: [],
    first_air_date: "2024-02-28",
    genres: [],
    homepage: "",
    id: 246125,
    in_production: true,
    languages: ["pl"],
    last_air_date: "2025-03-16",
    last_episode_to_air: {
      id: 6083128,
      name: "Episode 7",
      overview: "",
      vote_average: 0,
      vote_count: 0,
      air_date: "2025-04-06",
      episode_number: 7,
      episode_type: "standard",
      production_code: "",
      runtime: 65,
      season_number: 2,
      show_id: 246125,
      still_path: null,
    },
    name: "The Traitors. Zdrajcy",
    next_episode_to_air: {
      id: 6107620,
      name: "Episode 8",
      overview: "",
      vote_average: 0,
      vote_count: 0,
      air_date: "2025-04-13",
      episode_number: 8,
      episode_type: "standard",
      production_code: "",
      runtime: null,
      season_number: 2,
      show_id: 246125,
      still_path: null,
    },
    networks: [
      {
        id: 504,
        logo_path: "/1eFvEkm4Kyu5oArfCaGoznXUF7X.png",
        name: "TVN",
        origin_country: "PL",
      },
    ],
    number_of_episodes: 18,
    number_of_seasons: 2,
    origin_country: ["PL"],
    original_language: "pl",
    original_name: "The Traitors. Zdrajcy",
    overview: "",
    popularity: 1.1596,
    poster_path: "/vK6j12Oe2wEUYN0g0rAFSBBCqkl.jpg",
    production_companies: [],
    production_countries: [],
    seasons: [
      {
        air_date: "2024-02-28",
        episode_count: 13,
        id: 378605,
        name: "Season 1",
        overview: "",
        poster_path: null,
        season_number: 1,
        vote_average: 0,
      },
      {
        air_date: "2025-02-23",
        episode_count: 8,
        id: 442788,
        name: "Season 2",
        overview: "",
        poster_path: null,
        season_number: 2,
        vote_average: 0,
      },
    ],
    spoken_languages: [
      {
        english_name: "Polish",
        iso_639_1: "pl",
        name: "Polski",
      },
    ],
    status: "Returning Series",
    tagline: "",
    type: "Reality",
    vote_average: 6.5,
    vote_count: 2,
    objectID: "246125",
  };

  const mockShows = [
    {
      adult: false,
      backdrop_path: "/tiY1TFt7yVrlGSHqttXAfvcRwMj.jpg",
      created_by: [],
      episode_run_time: [],
      first_air_date: "2024-02-28",
      genres: [],
      homepage: "",
      id: 246125,
      in_production: true,
      languages: ["pl"],
      last_air_date: "2025-03-16",
      last_episode_to_air: {
        id: 6083128,
        name: "Episode 7",
        overview: "",
        vote_average: 0,
        vote_count: 0,
        air_date: "2025-04-06",
        episode_number: 7,
        episode_type: "standard",
        production_code: "",
        runtime: 65,
        season_number: 2,
        show_id: 246125,
        still_path: null,
      },
      name: "The Traitors. Zdrajcy",
      next_episode_to_air: {
        id: 6107620,
        name: "Episode 8",
        overview: "",
        vote_average: 0,
        vote_count: 0,
        air_date: "2025-04-13",
        episode_number: 8,
        episode_type: "standard",
        production_code: "",
        runtime: null,
        season_number: 2,
        show_id: 246125,
        still_path: null,
      },
      networks: [
        {
          id: 504,
          logo_path: "/1eFvEkm4Kyu5oArfCaGoznXUF7X.png",
          name: "TVN",
          origin_country: "PL",
        },
      ],
      number_of_episodes: 18,
      number_of_seasons: 2,
      origin_country: ["PL"],
      original_language: "pl",
      original_name: "The Traitors. Zdrajcy",
      overview: "",
      popularity: 1.1596,
      poster_path: "/vK6j12Oe2wEUYN0g0rAFSBBCqkl.jpg",
      production_companies: [],
      production_countries: [],
      seasons: [
        {
          air_date: "2024-02-28",
          episode_count: 13,
          id: 378605,
          name: "Season 1",
          overview: "",
          poster_path: null,
          season_number: 1,
          vote_average: 0,
        },
        {
          air_date: "2025-02-23",
          episode_count: 8,
          id: 442788,
          name: "Season 2",
          overview: "",
          poster_path: null,
          season_number: 2,
          vote_average: 0,
        },
      ],
      spoken_languages: [
        {
          english_name: "Polish",
          iso_639_1: "pl",
          name: "Polski",
        },
      ],
      status: "Returning Series",
      tagline: "",
      type: "Reality",
      vote_average: 6.5,
      vote_count: 2,
      objectID: "246125",
    },
  ];

  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent],
      providers: [],
    }).compileComponents();
    fixture = TestBed.createComponent(CardsComponent, {});
    component = fixture.componentInstance;
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });

  it("should display the show details", async () => {
    component.shows = mockShows;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector("div")?.textContent).toContain(
      `${show.next_episode_to_air.season_number} Ep.${show.next_episode_to_air.episode_number}`,
    );
  });

  it("should show a message when there's no shows", async () => {
    component.shows = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector("h3")?.textContent).toBe(
      "There are no shows airing today.",
    );
  });
});
