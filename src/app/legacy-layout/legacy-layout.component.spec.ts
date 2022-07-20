import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyLayoutComponent } from './legacy-layout.component';

describe('LegacyLayoutComponent', () => {
  let component: LegacyLayoutComponent;
  let fixture: ComponentFixture<LegacyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
