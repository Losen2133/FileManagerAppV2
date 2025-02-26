import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
  standalone: false
})
export class MainPagePage implements OnInit {
  fileName: string = "";
  isFileNameDisabled: boolean = false;
  fileContent: string | any = "";
  buttonState: string = "Save File"
  pageTitle: string = "File Manager App v2";
  response: string = "File created successfully!";

  constructor() { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.checkPreferences();
  }

  async checkPreferences() {
    try {
      const state = (await Preferences.get({ key: 'state' }))?.value;
  
      if (state === 'new') {
        this.clearPage();
      } else if (state === 'edit') {
        const filePath = (await Preferences.get({ key: 'filePath' }))?.value;
        if(filePath) {
          this.fileName = filePath;
          this.isFileNameDisabled = true;
          this.fileContent = await this.readFile(filePath);
          this.buttonState = "Save Changes";
          this.response = "File changes successfully saved!";
        }
      }
  
      await Promise.all([
        Preferences.remove({ key: 'state' }),
        Preferences.remove({ key: 'filePath' })
      ]);
    } catch (error) {
      console.error("Error checking preferences:", error);
    }
  }
  
  async readFile(filePath: string) {
    const result = await Filesystem.readFile({
      path: filePath,
      directory: Directory.Documents
    });

    return result.data;
  }

  clearPage() {
    this.fileName = "";
    this.isFileNameDisabled= false;
    this.fileContent = "";
    this.buttonState = "Save File";
    this.response = "File created successfully!";
  }

  async saveFile() {
    if (!this.fileName.trim()) {
      alert("File name cannot be empty.");
      return;
    }

    try {
      await Filesystem.writeFile({
        path: this.fileName,
        data: this.fileContent,
        directory: Directory.Documents
      });
      alert(this.response);
      this.clearPage();
    } catch (error) {
      console.log("Error saving file", error);
    }
  }

}
