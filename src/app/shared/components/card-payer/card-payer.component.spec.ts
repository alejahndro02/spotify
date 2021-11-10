import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPayerComponent } from './card-payer.component';

describe('CardPayerComponent', () => {
  let component: CardPayerComponent;
  let fixture: ComponentFixture<CardPayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
