import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OPCIONESEMPPage } from './opciones-emp.page';

describe('OPCIONESEMPPage', () => {
  let component: OPCIONESEMPPage;
  let fixture: ComponentFixture<OPCIONESEMPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OPCIONESEMPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
