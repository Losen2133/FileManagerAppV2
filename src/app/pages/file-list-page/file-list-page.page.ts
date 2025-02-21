import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-file-list-page',
  templateUrl: './file-list-page.page.html',
  styleUrls: ['./file-list-page.page.scss'],
  standalone: false
})
export class FileListPagePage implements OnInit {
  fileList: string[] = [];
  pageTitle: string = "Files";
  constructor() { }

  ngOnInit() {
    this.refreshFileList();
  }

  async refreshFileList() {
    try {
      const result = await Filesystem.readdir({
        path: "",
        directory: Directory.Documents
      });
      this.fileList = result.files.map(file => file.name);
    } catch(error) {
      console.log("Error reading directory", error);
    }
  }

}
