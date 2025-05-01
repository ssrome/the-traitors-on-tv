import { TestBed } from "@angular/core/testing";
import { AlgoliaService } from "../services/algolia.service";
import { AlgoliaResolver } from "./algolia.resolver";
import { ActivatedRouteSnapshot } from "@angular/router";

describe("AlgoliaResolver", () => {
  function setup(overrides: any = {}) {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AlgoliaResolver,
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            url: [{ path: overrides.path ?? null }],
          },
        },
      ],
    });

    const resolver = TestBed.inject(AlgoliaResolver);
    const route = TestBed.inject(ActivatedRouteSnapshot);
    const algoliaService = TestBed.inject(AlgoliaService);

    return {
      resolver,
      route,
      algoliaService,
    };
  }

  it("should be created", () => {
    const { resolver } = setup();
    expect(resolver).toBeTruthy();
  });
});
