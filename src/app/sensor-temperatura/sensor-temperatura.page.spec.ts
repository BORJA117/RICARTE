import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SENSORTEMPERATURAPage } from './sensor-temperatura.page';

describe('SENSORTEMPERATURAPage', () => {
  let component: SENSORTEMPERATURAPage;
  let fixture: ComponentFixture<SENSORTEMPERATURAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SENSORTEMPERATURAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
