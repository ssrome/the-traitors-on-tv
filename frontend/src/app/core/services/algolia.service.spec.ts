import { HttpTestingController } from "@angular/common/http/testing";
import { AlgoliaService } from "./algolia.service";
import { TestBed } from "@angular/core/testing";

describe("AlgoliaService", () => {
  let service: AlgoliaService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AlgoliaService, HttpTestingController],
    });
    service = TestBed.inject(AlgoliaService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should create the service", async () => {
    expect(service).toBeTruthy();
  });
});
