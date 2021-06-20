import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroPagoComponent } from './tablero-pago.component';

describe('TableroPagoComponent', () => {
  let component: TableroPagoComponent;
  let fixture: ComponentFixture<TableroPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
