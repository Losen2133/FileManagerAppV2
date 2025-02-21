import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
  standalone: false
})
export class MainPagePage implements OnInit {
  fileName: string = "";
  fileContent: string = "";
  pageTitle: string = "File Manager App v2";

  constructor() { }

  ngOnInit() {
  }

  async createFile() {
    try {
      await Filesystem.writeFile({
        path: this.fileName,
        data: this.fileContent,
        directory: Directory.Documents
      });
      alert("File created successfully!");
    } catch (error) {
      console.log("Error saving file", error);
    }
  }

}
