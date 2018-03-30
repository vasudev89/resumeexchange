import { Component, OnInit } from '@angular/core';

declare var $:any; 

@Component({
  selector: 'app-resumecomponents',
  templateUrl: './resumecomponents.component.html',
  styleUrls: ['./resumecomponents.component.css']
})
export class ResumecomponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
          e.preventDefault();
          $(this).siblings('a.active').removeClass("active");
          $(this).addClass("active");
          var index = $(this).index();
          $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
          $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
      });
  });
  }

  

}
