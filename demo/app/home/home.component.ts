import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styles: [`
    .slide-1{
        background-color: #448AFF;
      }

      .slide-2{
        background-color: #F44336;
      }
      .slide-3{
        background-color: #8BC34A;
      }

      .slide-4{
        background-color: #9C27B0;
      }
      .slide-5{
        background-color: #FFC107;
      }

      .slide-6{
        background-color: #448AFF;
      }

      .slide-7{
        background-color: #F44336;
      }
      .slide-8{
        background-color: #8BC34A;
      }

      .slide-9{
        background-color: #9C27B0;
      }
      .slide-10{
        background-color: #FFC107;
      }


      .slide-indicator-inactive{
          background-color: #fff;
          opacity : 0.4;
          width : 10;
          height : 10;
          margin-left : 2.5;
          margin-right : 2.5;
          margin-top : 0;
          border-radius : 5;
      }

      .slide-indicator-active{
          background-color: #fff;
          opacity : 0.9;
          width : 10;
          height : 10;
          margin-left : 2.5;
          margin-right : 2.5;
          margin-top : 0;
          border-radius : 5;
      }

    `]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
