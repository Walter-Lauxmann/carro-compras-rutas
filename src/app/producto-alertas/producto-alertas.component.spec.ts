import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAlertasComponent } from './producto-alertas.component';

describe('ProductoAlertasComponent', () => {
  let component: ProductoAlertasComponent;
  let fixture: ComponentFixture<ProductoAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
