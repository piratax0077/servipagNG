import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoenlineaComponent } from './pagoenlinea.component';

describe('PagoenlineaComponent', () => {
  let component: PagoenlineaComponent;
  let fixture: ComponentFixture<PagoenlineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoenlineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoenlineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
