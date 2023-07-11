import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuestionarioEMPPage } from './cuestionario-emp.page';

describe('CuestionarioEMPPage', () => {
  let component: CuestionarioEMPPage;
  let fixture: ComponentFixture<CuestionarioEMPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuestionarioEMPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
