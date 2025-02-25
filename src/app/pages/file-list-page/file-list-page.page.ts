import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-file-list-page',
  templateUrl: './file-list-page.page.html',
  styleUrls: ['./file-list-page.page.scss'],
  standalone: false
})
export class FileListPagePage implements OnInit {
  fileList: { name: string; content: string | any;}[] = [];
  pageTitle: string = "Files";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadFiles();
  }

  async loadFiles() {
    try {
      const result = await Filesystem.readdir({
        path: "",
        directory: Directory.Documents
      });
  
      this.fileList = [];
  
      for (const file of result.files) {
        try {
          const fileData = await Filesystem.readFile({
            path: file.name,
            directory: Directory.Documents
          });
  
          this.fileList.push({ name: file.name, content: fileData.data });
        } catch (error) {
          console.log("Error reading file", error);
        }
      }
    } catch (error) {
      console.log("Error reading directory", error);
    }
  }
  

  async deleteFile(file: {name: string, content: string}) {
    try{
      await Filesystem.deleteFile({
        path: file.name,
        directory: Directory.Documents
      });
      alert("Delete successful");
      this.loadFiles();
    } catch (error) {
      console.log("Error deleting file", error);
    }
  }

  async newFile() {
    await Preferences.set({key: 'state', value: 'new'});
    this.router.navigate(['home/main-page']);
  }

  async editFile(file: {name: string, content: string}) {
    await Preferences.set({key: 'state', value: 'edit'});

    const fileData = {
      fileName: file.name,
      fileContent: file.content
    }

    await Preferences.set({key: 'fileData', value: JSON.stringify(fileData)});
    this.router.navigate(['home/main-page']);
  }
}
