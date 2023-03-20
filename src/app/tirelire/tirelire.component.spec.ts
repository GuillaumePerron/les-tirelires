import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirelireComponent } from './tirelire.component';

describe('TirelireComponent', () => {
  let component: TirelireComponent;
  let fixture: ComponentFixture<TirelireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirelireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirelireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
