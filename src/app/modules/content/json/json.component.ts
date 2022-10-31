import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor() { }

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
    this.customJson = this.cusrecursive(this.xmlJson);
    console.log("customJson",this.customJson);
  }

  xmlJson = {
    "accountSetmsg":{
      "msgHeader0":{
        "asofDate1":"10-31-2022",
        "srcAccCode1":{
          "code2":"S2I",
          "test2":{
            "code3":"S2I",
            "codingSchema3":"S2I"
          },
          "codingSchema2":"S2I",
        },
        "prcDate1":"10-31-2022"
      }
    }
  };
  recuresivCall(v){
    let a = 0
    for (const [key, value] of Object.entries(v)) {
      ++a;
      let vany = value;
      if(typeof(value) === "object"){
        this.recuresivCall(vany);
        let children = {
          name : key,
          show : false,
          value : null,
          children : []
        }
        // if(a == 1){
          this.customJson.children.push(children);
        // }
        console.log("mychildren",children);
      }else{
        let children = {
          name : key,
          show : false,
          value : value,
          children : null
        }
        // if(a == 1){
          this.customJson.children.push(children);
        // }
        console.log("children",children);

      }
    }

    console.log("customJson "+a,this.customJson);

  }

  cusrecursive(obj) {
    let customJson = []
    for (var key in obj) {
      if (typeof (obj[key]) === "object") {
        let tempobj = {
          name: key,
          value: null,
          show: false,
          children: []
        }
        tempobj.children = this.cusrecursive(obj[key])
        customJson.push(tempobj)
      } else {
        customJson.push({
          name: key,
          value: obj[key],
          children: null
        })
      }
    }
    return customJson;
  }
}
