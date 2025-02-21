import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileListPagePage } from './file-list-page.page';

describe('FileListPagePage', () => {
  let component: FileListPagePage;
  let fixture: ComponentFixture<FileListPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
