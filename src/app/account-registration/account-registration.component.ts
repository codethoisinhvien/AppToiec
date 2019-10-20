import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';
@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})
export class AccountRegistrationComponent implements OnInit {
  file
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
 
  onFileChange($event) {
    
   console.log(  $event.srcElement.files)
   var reader = new FileReader();
    reader.readAsText($event.target.files[0]);
    reader.onload = (data) => {
      console.log(data)
    }
}
}