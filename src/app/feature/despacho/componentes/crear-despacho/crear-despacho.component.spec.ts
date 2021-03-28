import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDespachoComponent } from './crear-despacho.component';

describe('CrearDespachoComponent', () => {
  let component: CrearDespachoComponent;
  let fixture: ComponentFixture<CrearDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
