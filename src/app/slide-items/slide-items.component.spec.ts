import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideItemsComponent } from './slide-items.component';

describe('SlideItemsComponent', () => {
  let component: SlideItemsComponent;
  let fixture: ComponentFixture<SlideItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
