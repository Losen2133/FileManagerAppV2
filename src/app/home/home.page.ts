import { Component } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  fileName: string = "";
  fileContent: string | any = "";
  pageTitle: string = "File Manager App v2";

  constructor(private router: Router) {}

  async createFile() {
    try{
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

  nextPage() {
    this.router.navigate(["/files"]);
  }
}
