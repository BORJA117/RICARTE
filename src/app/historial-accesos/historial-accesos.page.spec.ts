import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HISTORIALACCESOSPage } from './historial-accesos.page';

describe('HISTORIALACCESOSPage', () => {
  let component: HISTORIALACCESOSPage;
  let fixture: ComponentFixture<HISTORIALACCESOSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HISTORIALACCESOSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
