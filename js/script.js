function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
  var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь"];
  function yeartable() {
    var yearrow = '<tbody>';
    for(var k = 0; k < 10; k++) {
      yearrow += '<tr>';
      for (var i = 0; i < 10; i++) {
        yearrow += '<td></td>';
      }
       yearrow += '</tr>';
     }
     yearrow += "</tbody>";
     $("#t4").html(yearrow);
  }
  function writeyear() {
    var firstyear = 1950;
    for(var k = 0; k < 10; k++) {
      for (var i = 0; i < 10; i++) {
        t4.rows[k].cells[i].innerHTML = firstyear;
        firstyear++;
      }
     }
  }
  function monthtable(data) {
    var monthrow = '<tbody>';
    for (var i = 0; i <= 2; i++) {
      monthrow += '<tr><td></td><td></td><td></td><td></td></tr>';
    }
    monthrow += "</tbody>";
    $("#t3").html(monthrow);
  };
  var h=0;
  function writemonth(months) {
    for (var k = 0; k <= 2; k++) {
		for (var l = 0; l <= 3; l++){
      t3.rows[k].cells[l].innerHTML = months[h];
      t3.rows[k].cells[l].setAttribute("id", h);
	  h++;
		}
    }
  }
  monthtable(months);
  writemonth(months);
  yeartable();
  writeyear();
  $('#chooseyear').hide();
  $("#choose").hide();
  var options3={
  month: 'long',
  }
	var options={
	year: 'numeric',
 	month: 'long',
	}
		var options2={
	day: 'numeric',
	year: 'numeric',
 	month: 'long',
	}
	var a;
	var date = new Date;
	var month = date.getMonth();
	var year = date.getFullYear();
	var showMonth=function(dateNum) {
		dateNum.setDate(1);
    if(dateNum.getDay()==0)
    	{
      dateNum.setDate(-6);
    }
    else
    {dateNum.setDate(- dateNum.getDay()+1);}
		for(var i = 1 ; i<7 ;i++) {
				for(var k=0;k<7;k++) {
					dateNum.setDate(dateNum.getDate()+1);
					t1.rows[i].cells[k].innerHTML=dateNum.getDate();
					t1.rows[i].cells[k].className="";
					if(dateNum.getFullYear()==year) {
            if(dateNum.getMonth()<month) {
						  t1.rows[i].cells[k].className="prvsMounth";
            }
  					if((dateNum.getMonth()>month)) {
						    t1.rows[i].cells[k].className="nextMounth";
					  }
          }
          else {
            if(dateNum.getFullYear()<year) {
              t1.rows[i].cells[k].className="prvsMounth";
            }
            if(dateNum.getFullYear()>year) {
              t1.rows[i].cells[k].className="nextMounth";
            }
          }
        }
		}
		dateNum.setFullYear(year, month);
		current.innerHTML=dateNum.toLocaleString("ru", options);
	}
	showMonth(date);
	
	function cur() {current.innerHTML=date.getFullYear();}
	
	$('#prvs').on("click", function() {
		if(month==0) {
			date.setFullYear(date.getFullYear()-1,11,1);
			month=11;
			year--;
		}
		else{
			month--;
			date.setMonth(month);
		}
		showMonth(date);
	})
	$('#next').on("click", function() {
		if(month==11) {
			date.setFullYear(date.getFullYear()+1,0,1);
			month=0;
			year++;
		}
		else{
			month++;
			date.setMonth(month);
		}
		showMonth(date);
	})
	$('#t1 td').on("click", function(event) {
			var target = event.target;
      if(target.className!="calHeader"){
				if(target.className=="prvsMounth") {
					date.setMonth(month-1);
				}
				if(target.className=="nextMounth") {
					date.setMonth(month+1);
				}
				if ((target.className!="nextMounth")&&(target.className!="prvsMounth")) {
					date.setMonth(month);
				}
			date.setDate(target.innerHTML);
			alert(date.toLocaleString("ru", options2));
    }
	});
  $('#current').on('click',function(event) {
	  var target = event.target;

    if(target.getAttribute("step")=="1") { $('#choose').show(); $('#current').attr('step', String('2'));
	cur();}
	else{    $('#chooseyear').show();
	}



  });
  

  $('#t3').on("click", function(event) {
    var target = event.target;
    date.setMonth(target.getAttribute("id"));
    month = target.getAttribute("id");
    showMonth(date);
    $("#choose").hide();
    $('#chooseyear').hide();
	$('#current').attr('step', String('1'));
  });
  	$('#t4 td').on("click", function(event) {
      var target = event.target;
      date.setFullYear(target.innerHTML, month,10);
      year = target.innerHTML;
      showMonth(date);
      $('#chooseyear').hide();
      
	  $('#current').attr('step', String('2'));
    });
});
