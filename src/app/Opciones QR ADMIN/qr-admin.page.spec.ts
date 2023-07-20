import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRADMINPage } from './qr-admin.page';

describe('QRADMINPage', () => {
  let component: QRADMINPage;
  let fixture: ComponentFixture<QRADMINPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRADMINPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
