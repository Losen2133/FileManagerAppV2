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
  fileContent: string = "";
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
    const { value: state } = await Preferences.get({ key: 'state' });
  
    if (state === 'new') {
      this.clearPage();
      await Preferences.remove({ key: 'state' });
    } else if (state === 'edit') {
      const { value: fileDataJSON } = await Preferences.get({ key: 'fileData' });
  
      if (fileDataJSON !== null) {
        const fileData = JSON.parse(fileDataJSON);
        if (fileData) {
          this.fileName = fileData.fileName;
          this.isFileNameDisabled = true;
          this.fileContent = fileData.fileContent;
          this.buttonState = "Save Changes";
          this.response = "File changes successfully saved!";
        }
      }
  
      await Preferences.remove({ key: 'fileData' });
      await Preferences.remove({ key: 'state' });
    }
  }

  clearPage() {
    this.fileName = "";
    this.isFileNameDisabled= false;
    this.fileContent = "";
    this.buttonState = "Save File";
    this.response = "File created successfully!";
  }

  async saveFile() {
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
