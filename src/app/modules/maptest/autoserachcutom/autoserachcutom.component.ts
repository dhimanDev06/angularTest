import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoserachcutom',
  templateUrl: './autoserachcutom.component.html',
  styleUrls: ['./autoserachcutom.component.css']
})
export class AutoserachcutomComponent implements OnInit {
  currentSelected: any = {};

  constructor() { }
  list: any = [];
  checkedList: any = [];
  name: any = 'Angular';
  showDropDown: boolean = false;
  searchText: string = '';
  backup: any = [];
  ngOnInit(): void {
    this.list =
      [
        { name: 'India', checked: false },
        { name: 'Indonesia', checked: false },
        { name: 'US', checked: false },
        { name: 'China', checked: false },
        { name: 'France', checked: false }
      ];
    this.backup = [...this.list];
  }

  filterBy() {
    if (this.searchText.length > 1) {
      this.list = this.list.filter((element: any) => (element.name.toLowerCase()).includes((this.searchText).toLowerCase()));
    } else {
      this.reset();
    }
  }

  reset() {
    this.list = [...this.backup];
  }
  getSelectedValue(status: Boolean, value: String, index: any) {
    let Object = { name: value, checked: status };
    this.list[index] = Object;
    if (status) {
      let isExist = this.checkedList.filter((a: any) => a.name == Object.name);
      if (isExist.length == 0) {
        this.checkedList.push(Object);
      }
    } else {
      var index = this.checkedList.indexOf(Object);
      this.checkedList.splice(index, 1);
    }
    this.list[index] = Object;
    this.currentSelected = { checked: status, name: value };
    this.backupSet(Object);
  }
  backupSet(Object:any){
    let isExist = this.backup.filter((a: any) => a.name == Object.name);
    if (isExist.length > 0) {
      isExist[0].checked = Object.checked;
    }
  }

  shareCheckedList(item: any[]) {
    console.log("1", item);
  }
  shareIndividualCheckedList(item: {}) {
    console.log("2", item);
  }

  remove(item: any) {
    this.checkedList = this.checkedList.filter((a: any) => a.name != item);
    let isExist = this.list.filter((a: any) => a.name == item);
    if (isExist.length > 0) {
      isExist[0].checked = false;
    }
    //console.log('remove',isExist);
  }
}
