import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDigitalHumanComponent } from './base-digital-human.component';

describe('BaseDigitalHumanComponent', () => {
  let component: BaseDigitalHumanComponent;
  let fixture: ComponentFixture<BaseDigitalHumanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseDigitalHumanComponent]
    });
    fixture = TestBed.createComponent(BaseDigitalHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
