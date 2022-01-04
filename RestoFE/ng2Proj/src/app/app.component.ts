import { Component } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';

const URL = '/resto/updimg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng2Proj';

  public uploader: FileUploader = new FileUploader({ url: URL,additionalParameter:{name:"Paneer Butter Masala"}});
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
 }

  
//   afuConfig = {
//     multiple: false,
//     formatsAllowed: ".jpg,.png",
   
//     uploadAPI:  {
//       url:"/resto/updimg",
      
      
//       params: {
//         'page': 'Paneer Butter Masala'
//       },
     
//     },
//     theme: "dragNDrop",
   
//     replaceTexts: {
//       selectFileBtn: 'Select Files',
//       resetBtn: 'Reset',
//       uploadBtn: 'Upload',
//       dragNDropBox: 'Drag N Drop',
//       attachPinBtn: 'Attach Files...',
//       afterUploadMsg_success: 'Successfully Uploaded !',
//       afterUploadMsg_error: 'Upload Failed !',
//       sizeLimit: 'Size Limit'
//     }
    
// };
// docUpload(event:any){
//   console.log(event);
  
// }
}
