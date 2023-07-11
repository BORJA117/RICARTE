import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUESTIONARIOVISITANTESPage } from './cuestionario-visitantes.page';

describe('CUESTIONARIOVISITANTESPage', () => {
  let component: CUESTIONARIOVISITANTESPage;
  let fixture: ComponentFixture<CUESTIONARIOVISITANTESPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CUESTIONARIOVISITANTESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
