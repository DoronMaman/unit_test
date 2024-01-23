import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreoTestComponent } from './creo-test.component';

describe('CreoTestComponent', () => {
  let component: CreoTestComponent;
  let fixture: ComponentFixture<CreoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreoTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
