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
    this.alignData();    
  }

  reset() {
    this.list = [...this.backup];
  }
  getSelectedValue(status: Boolean, value: String, index: any) {
    let Object = { name: value, checked: status };
    if (status) {
      let isExist = this.checkedList.filter((a: any) => a.name == Object.name);
      if (isExist.length == 0) {
        this.checkedList.push(Object);
      }
    } else {
      this.checkedList = this.checkedList.filter((a:any)=> a.name != value);
    }
    this.list[index] = Object;
    this.currentSelected = { checked: status, name: value };
    this.alignData();    
    this.backupSet(Object);
  }
  alignData(){
    let selected:any = this.list.filter((a:any)=>a.checked);
    let notSelected:any = this.list.filter((a:any)=>!a.checked);
    this.list = [...selected,...notSelected]
  }
  backupSet(Object:any){
    let isExist = this.backup.filter((a: any) => a.name == Object.name);
    if (isExist.length > 0) {
      isExist[0].checked = Object.checked;
    }
  }
  showAll(){
    console.log('showAll backup',this.backup);
    console.log('showAll checkedList',this.checkedList);
    console.log('showAll list',this.list);
    
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
    this.alignData();    
  }
}
