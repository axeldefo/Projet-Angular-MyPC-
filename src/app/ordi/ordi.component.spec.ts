import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiComponent } from './ordi.component';

describe('OrdiComponent', () => {
  let component: OrdiComponent;
  let fixture: ComponentFixture<OrdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
