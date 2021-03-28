import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDespachoComponent } from './buscar-despacho.component';

describe('BuscarDespachoComponent', () => {
  let component: BuscarDespachoComponent;
  let fixture: ComponentFixture<BuscarDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
