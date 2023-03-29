import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMonitoresComponent } from './grid-monitores.component';

describe('GridMonitoresComponent', () => {
  let component: GridMonitoresComponent;
  let fixture: ComponentFixture<GridMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMonitoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
