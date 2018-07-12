import {Component, Input, OnInit} from '@angular/core';
import {FileUploader, FileUploaderOptions} from "ng2-file-upload";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = false;
  public isSuccessUpload: boolean;
  public isErrorUpload: boolean;

  @Input()
  public contextUrl: string;
  @Input()
  public title: string;
  @Input()
  public buttonText: string;
  @Input()
  public smallText: string;
  @Input()
  public errorText: string;


  constructor() { }

  ngOnInit() {
    const uploaderOptions: FileUploaderOptions = {
      url: this.contextUrl,
      autoUpload: true,
      isHTML5: true,
      removeAfterUpload: true,
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);

    };

    this.uploader.onCancelItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
    };

  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


}
