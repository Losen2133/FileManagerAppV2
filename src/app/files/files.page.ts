import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
  standalone: false
})
export class FilesPage implements OnInit {

  constructor() { }
  fileList: string[] = [];

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
