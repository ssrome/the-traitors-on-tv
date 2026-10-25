import { ComponentFixture, TestBed } from "@angular/core/testing";
import { About } from "./about";

describe("About", () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();
    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(About);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("should contain the following TMDB related text", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector("p")?.textContent).toContain(
      "This product uses the TMDB API but is not endorsed or certified by TMDB.",
    );
  });

  it("should contain the following Algolia related text", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector("p")?.textContent).toContain(
      "It is also powered by Algolia",
    );
  });
});
