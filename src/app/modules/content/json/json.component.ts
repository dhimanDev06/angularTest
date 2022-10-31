import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor() { }
  xmlJson = {
    "accountSetmsg":{
      "msgHeader":{
        "srcAccCode":{
          "code":"S2I",
          "codingSchema":"S2I"
        },
        "asofDate":"10-31-2022",
        "prcDate":"10-31-2022"
      }
    }
  };
  level:number = 1;

  sampleJson :any = {
    name:"accountSetmsg",
    value:null,
    show:false,
    children:[
      {
        name:"msgHeader",
        value:null,
        show:false,
        children:[
          {
            name:"srcAccCode",
            value:null,
            show:false,
            children:[
              {
                name:"code",
                value:"S2I",
                show:false,
                children:null
              },
              {
                name:"codingSchema",
                value:"S2I",
                show:false,
                children:null
              }
            ]
          },
          {
            name:"asofDate",
            value:"10-31-2022",
            show:false,
            children:null
          },
          {
            name:"prcDate",
            value:"10-31-2022",
            show:false,
            children:null
          }
        ]
      }
    ]
  };
  customJson :any = {
  };
  ngOnInit(): void {
    for (const [key, value] of Object.entries(this.xmlJson)) {
      console.log(`${key}(1): ${value} -> ${typeof(value)}`);
      let v = value;
      if(typeof(value) === "object"){
        this.customJson = {
          name : key,
          value : null,
          show : false,
          children : []
        }
        this.recuresivCall(v);
      }else if(typeof(value) === "string"){

      }
    }
    console.log("customJson",this.customJson);
  }

  recuresivCall(v){
    for (const [key, value] of Object.entries(v)) {
      console.log(`${key}(2): ${value} -> ${typeof(value)}`);
      let vany = value;
      if(typeof(value) === "object"){
        this.recuresivCall(vany);
        let children = {
          name : key,
          show : false,
          value : null,
          children : []
        }
        console.log("level",this.customJson.children.length,this.customJson.children);
        // break;
        
        this.customJson.children.push(children);
        console.log("children",children);
      }else if(typeof(value) === "string"){
        let children = {
          name : key,
          show : false,
          value : value,
          children : null
        }
        this.customJson.children.push(children);
        console.log("children",children);

      }
    }

    console.log("customJson",this.customJson);

  }

}
