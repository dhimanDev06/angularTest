import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor() { }

  data:any = {
    title:'main View',
    children:[
      {
        name:'A',
        value:5,
        children:[
          {
            name:'AA',
            value:5,
            children:[
              {
                name:'AAA',
                value:5,
                children:[]
              },
              {
                name:'CCC',
                value:5,
                children:[
                  {
                    name:'AAAA',
                    value:5,
                    children:[]
                  },
                  {
                    name:'CCCC',
                    value:5,
                    children:[]
                  }
                ]
              }
            ]
          },
          {
            name:'BB',
            value:5,
            children:[
              {
                name:'AAAA',
                value:5,
                children:[]
              },
              {
                name:'CCCC',
                value:5,
                children:[]
              }
            ]
          }
        ]
      },
      {
        name:'M',
        value:5,
        children:[
          {
            name:'MM',
            value:5,
            children:[
              {
                name:'OOO',
                value:5,
                children:[]
              },
              {
                name:'PP',
                value:5,
                children:[]
              }
            ]
          },
          {
            name:'NN',
            value:5,
            children:[
              {
                name:'QQQ',
                value:5,
                children:[
                  {
                    name:'SSSS',
                    value:5,
                    children:[]
                  },
                  {
                    name:'TTTT',
                    value:5,
                    children:[
                      {
                        name:'UUUUU',
                        value:5,
                        children:[
                          {
                            name:'WWWWWW',
                            value:5,
                            children:[]
                          }
                        ]
                      },
                      {
                        name:'VVVVV',
                        value:5,
                        children:[]
                      }
                    ]
                  }
                ]
              },
              {
                name:'RRR',
                value:5,
                children:[]
              }
            ]
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
