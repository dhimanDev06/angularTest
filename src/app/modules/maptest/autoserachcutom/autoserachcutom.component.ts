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
  accordianList:any = [
    {
      title:'00013427 - Holder',
      type:'A',
      keyValue:'0119610',
      childArray:[
        {
          title:'Abc',
          keyValue:'08987'
        },
        {
          title:'Qwe',
          keyValue:'06546'
        },{
          title:'Cvw',
          keyValue:'00777'
        },
        {
          title:'Asd',
          keyValue:'1222'
        }
      ]
    },
    {
      title:'Procuration DVG',
      type:'B',
      keyValue:'0119611',
      childArray:[
        {
          title:'Asq',
          keyValue:'123123'
        },
        {
          title:'Vdq',
          keyValue:'41123'
        },
        {
          title:'Gryt',
          keyValue:'678546'
        }
      ]
    }
  ]
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
    this.accordionPrcess();
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
    this.list = [...this.checkedList,...notSelected]
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
  removeAll(){
    this.checkedList = [];
    this.list.map((a:any)=> a.checked = false);
    this.alignData();    
  }

  remove(item: any) {
    this.checkedList = this.checkedList.filter((a: any) => a.name != item);
    let isExist = this.list.filter((a: any) => a.name == item);
    if (isExist.length > 0) {
      isExist[0].checked = false;
    }
    this.alignData();    
  }


  accordionPrcess(){
    this.accordianList.map((a:any)=>{
      a.childArray.map((c:any)=>c.checked = false);
      a.checked = false;
      a.accordionOpen = false;
      return a;
    });
  }
  changeAccorCollapse(keyValue:any){
    let dyBtn = document.getElementById(`panelsStayOpen-heading-btn${keyValue}`) as HTMLElement;
    dyBtn.click();
    let selected = this.accordianList.filter((a:any) => a.keyValue == keyValue);
    if(selected && selected.length > 0){
      selected[0].accordionOpen = dyBtn.getAttribute('aria-expanded') == 'true' ? true : false;
    }
  }
  checkAccor(){
    console.log('accordianList checkAccor',this.accordianList);
  }
  getCheckedValue(keyValue:any){
    let selected = this.accordianList.filter((a:any) => a.keyValue == keyValue);
    if(selected && selected.length > 0){
      selected[0].childArray.map((a:any)=> a.checked = !selected[0].checked);
    }
  }
  childClicked(childkeyValue:any,parentkeyValue:any){
    let parentselected = this.accordianList.filter((a:any) => a.keyValue == parentkeyValue);
    if(parentselected && parentselected.length > 0){
      setTimeout(() => {
        let childNotSeleted = parentselected[0].childArray.filter((b:any)=>!b.checked);
        if(childNotSeleted && childNotSeleted.length == 0){
          parentselected[0].checked = true
        }else if(childNotSeleted && childNotSeleted.length > 0){
          parentselected[0].checked = false
        }
      }, 100);
    }    
  }
}
