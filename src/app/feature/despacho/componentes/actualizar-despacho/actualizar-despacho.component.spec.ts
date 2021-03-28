import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDespachoComponent } from './actualizar-despacho.component';

describe('ActualizarDespachoComponent', () => {
  let component: ActualizarDespachoComponent;
  let fixture: ComponentFixture<ActualizarDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
