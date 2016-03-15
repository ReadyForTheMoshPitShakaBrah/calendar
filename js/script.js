function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
m=checkTime(m);
s=checkTime(s);
$('#time').html(h+":"+m+":"+s);
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
startTime();
$(document).ready(function() {
  var options3={
  month: 'long',
  }
  function yeartable() {
    var yearrow = '<tbody>';
    for(var k = 0; k < 4; k++) {
      yearrow += '<tr>';
      for (var i = 0; i < 5; i++) {
        yearrow += '<td></td>';
      }
       yearrow += '</tr>';
     }
     yearrow += "</tbody>";
     $("#t4").html(yearrow);
  }
  function writeyear(getYear,znak) {

if(getYear!=null){if(znak==1)
    var firstyear = getYear+20;
    if(znak==0)var firstyear = getYear-20;
  }
    else {var firstyear = date.getFullYear();}
    for(var k = 0; k < 4; k++) {
      for (var i = 0; i <5; i++) {
        t4.rows[k].cells[i].innerHTML = firstyear;
        firstyear++;
      }
     }
  }
  function monthtable() {
    var monthrow = '<tbody>';
    for (var i = 0; i <= 2; i++) {
      monthrow += '<tr><td></td><td></td><td></td><td></td></tr>';
    }
    monthrow += "</tbody>";
    $("#t3").html(monthrow);
  };
  var months= new Date(2009, 11);
  var h=0;
  function writemonth() {
    for (var k = 0; k <= 2; k++) {
		for (var l = 0; l <= 3; l++){
	  months.setMonth(months.getMonth()+1);
      t3.rows[k].cells[l].innerHTML = months.toLocaleString("ru", options3).substring(0,3);
      t3.rows[k].cells[l].setAttribute("id", h);
	  h++;
		}
    }
  }
  monthtable();
  writemonth();
  yeartable();

  $('#chooseyear').hide();
  $("#choose").hide();

	var options={
	year: 'numeric',
 	month: 'long',
	}
		var options2={
	day: 'numeric',
	year: 'numeric',
 	month: 'long',
	}
		var options3={
	year: 'numeric',
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
		if($('#current').attr('step')=='1'){current.innerHTML=dateNum.toLocaleString("ru", options3);}
if($('#current').attr('step')==2){current.innerHTML= Number($('#t4 tbody tr:eq(0) td:eq(0)').text())+"-"+Number(Number($('#t4 tbody tr:eq(0) td:eq(0)').text())+19);}
		if($('#current').attr('step')=='0'){current.innerHTML=dateNum.toLocaleString("ru", options);}
	}
	showMonth(date);
	function cur() {if($('#current').attr('step')=='1')current.innerHTML=date.getFullYear();
  if($('#current').attr('step')=='2')current.innerHTML=date.getFullYear()+"-"+Number(date.getFullYear()+19);
}
	$('#prvs').on("click", function() {
		if($('#current').attr('step')=='2'){ var getYear = Number($('#t4 tbody tr:eq(0) td:eq(0)').text()); var znak=0; writeyear(getYear,znak);}
    if($('#current').attr('step')=='1')  year--;
    if($('#current').attr('step')=='0')
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
	});
	$('#next').on("click", function() {
		if($('#current').attr('step')=='2'){ var getYear = Number($('#t4 tbody tr:eq(0) td:eq(0)').text()); var znak=1; writeyear(getYear,znak);}

    if($('#current').attr('step')=='1'){  year++;}
    if($('#current').attr('step')=='0'){
		if(month==11) {
			date.setFullYear(date.getFullYear()+1,0,1);
			month=0;
			year++;
		}
		else{
			month++;
			date.setMonth(month);
		}}
		showMonth(date);
	});
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
    date.setFullYear(year,month);
	});
  $('#current').on('click',function(event) {
	  var target = event.target;
    if(target.getAttribute("step")=="0") {
	$('#choose').show();
	$('#current').attr('step', String('1'));
	cur();}
	else{    $('#chooseyear').show();$('#current').attr('step', String('2'));writeyear();cur();
	}
  });
  $('#t3').on("click", function(event) {
    var target = event.target;
    date.setMonth(target.getAttribute("id"));
    month = target.getAttribute("id");
    $("#choose").hide();
    $('#chooseyear').hide();
	$('#current').attr('step', String('0'));
	showMonth(date);
  });
  	$('#t4 td').on("click", function(event) {
      var target = event.target;
      date.setFullYear(target.innerHTML, month,10);
      year = target.innerHTML;
      $('#chooseyear').hide();
	  $('#current').attr('step', String('1'));
	  	showMonth(date);
    });
});
