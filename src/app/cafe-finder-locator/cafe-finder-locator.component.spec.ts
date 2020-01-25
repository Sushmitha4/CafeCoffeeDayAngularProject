import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFinderLocatorComponent } from './cafe-finder-locator.component';

describe('CafeFinderLocatorComponent', () => {
  let component: CafeFinderLocatorComponent;
  let fixture: ComponentFixture<CafeFinderLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeFinderLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeFinderLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
