import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaperComponent } from './add-paper.component';

describe('AddPaperComponent', () => {
  let component: AddPaperComponent;
  let fixture: ComponentFixture<AddPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
