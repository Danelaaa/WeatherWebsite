import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFullComponent } from './weather-full.component';

describe('WeatherFullComponent', () => {
  let component: WeatherFullComponent;
  let fixture: ComponentFixture<WeatherFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherFullComponent]
    });
    fixture = TestBed.createComponent(WeatherFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
