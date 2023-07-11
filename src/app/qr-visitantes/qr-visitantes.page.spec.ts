import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRVISITANTESPage } from './qr-visitantes.page';

describe('QRVISITANTESPage', () => {
  let component: QRVISITANTESPage;
  let fixture: ComponentFixture<QRVISITANTESPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRVISITANTESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
