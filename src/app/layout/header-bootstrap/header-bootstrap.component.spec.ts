import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBootstrapComponent } from './header-bootstrap.component';

describe('HeaderBootstrapComponent', () => {
  let component: HeaderBootstrapComponent;
  let fixture: ComponentFixture<HeaderBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
