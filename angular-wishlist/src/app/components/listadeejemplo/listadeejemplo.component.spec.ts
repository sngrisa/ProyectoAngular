import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeejemploComponent } from './listadeejemplo.component';

describe('ListadeejemploComponent', () => {
  let component: ListadeejemploComponent;
  let fixture: ComponentFixture<ListadeejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeejemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
