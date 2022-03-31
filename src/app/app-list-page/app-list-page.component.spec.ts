import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListPageComponent } from './app-list-page.component';

describe('AppListPageComponent', () => {
  let component: AppListPageComponent;
  let fixture: ComponentFixture<AppListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
