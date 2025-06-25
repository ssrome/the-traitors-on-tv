import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuComponent } from "./menu.component";
import { provideRouter } from "@angular/router";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("should try to navigate home", async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector("li#home-link")?.textContent).toContain(
      "Home"
    );
  });

  it("should try to navigate home", async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(
      compiled.querySelector("li#next-episode-link")?.textContent
    ).toContain("Next Episode To Air");
  });

  it("should try to navigate about", async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector("li#about-link")?.textContent).toContain(
      "About"
    );
  });
});
