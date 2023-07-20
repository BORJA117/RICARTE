import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QREMPPage } from './qr-emp.page';

describe('QREMPPage', () => {
  let component: QREMPPage;
  let fixture: ComponentFixture<QREMPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QREMPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
