import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function(){
	
      /* Side Bar */
      // $("#sidebar h3:first").addClass("active");
      $("#sidebar div:not(:first)").hide();
    
      $("#sidebar h3").click(function () {
				$("#sidebar h3").next("div").slideToggle("slow")
					.siblings("div:visible");
				$("#sidebar h3").toggleClass("active").siblings("h3").removeClass("active");
        $("section").slideToggle("slow");
				$("section").toggleClass("active").siblings("h3").removeClass("active");
				
			});
      
      /* Login Form Slide Toggle */
      $(".btn-slide").click(
        function(){
        $("#panel").slideToggle("slow").css("");
        $(".btn-slide").toggleClass("active"); return false;
      });
      
      /* Slide Bar Navigation */
      $(function() {
        $('#navigation a').stop().animate({'marginLeft':'-85px'},1000);
    
        $('#navigation > li').hover(
          function () {
            $('a',$('#navigation')).stop().animate({'marginLeft':'-2px'},200);
          },
          function () {
            $('a',$('#navigation')).stop().animate({'marginLeft':'-85px'},200);
          }
        );
      });
      
      /* Show Hide Slide Bar */
      $("#navigation .showmenu").click(function() {
        $("#sidebar #left").toggle("slide", { direction: "left" }, 2);
        if ($("#map").css("width") == "672px") {
          $("#map").width(1022).offset({ top: 120, left: 169 });
          $("#left").hide();
        } else {
          $("#map").width(672).offset({ top: 120, left: 520 });
          $("#left").show();
        }
      });
    
    });
  }
}
