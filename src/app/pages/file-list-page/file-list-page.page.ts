import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-file-list-page',
  templateUrl: './file-list-page.page.html',
  styleUrls: ['./file-list-page.page.scss'],
  standalone: false
})
export class FileListPagePage implements OnInit {
  fileList: { name: string; content: string | any;}[] = [];
  pageTitle: string = "Files";
  constructor() { }

  ngOnInit() {
    this.loadFiles();
  }

  async loadFiles() {
    try {
      const result = await Filesystem.readdir({
        path: "",
        directory: Directory.Documents
      });

      this.fileList = [];

      for(const file of result.files) {
        try {
          const fileData = await Filesystem.readFile({
            path: file.name,
            directory: Directory.Documents
          });
  
          this.fileList.push({ name: file.name, content: fileData.data });
        } catch (error) {
          console.log("Error reading file", error)
        }
      }
    } catch (error) {
      console.log("Error reading directory", error);
    }
  }
}
