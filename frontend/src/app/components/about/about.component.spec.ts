import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AboutComponent } from "./about.component";

describe("About", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(AboutComponent);
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
