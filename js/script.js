function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
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

    if(dateNum.getDay()==0)	{
      dateNum.setDate(-6);
    }else{dateNum.setDate(- dateNum.getDay()+1);}
		for(var i = 1 ; i<7 ;i++) {
				for(var k=0;k<7;k++) {
					dateNum.setDate(dateNum.getDate()+1);
					t1.rows[i].cells[k].innerHTML=dateNum.getDate();
					t1.rows[i].cells[k].className="";
					if((dateNum.getMonth()<month)||(dateNum.getFullYear<year)) {
						t1.rows[i].cells[k].className="prvsMounth";
						t1.rows[i].cells[k].bgcolor="grey";
					}
					if((dateNum.getMonth()>month)||(dateNum.getFullYear>year)) {
						t1.rows[i].cells[k].className="nextMounth";
						t1.rows[i].cells[k].bgcolor="grey";
					}
			}

		}
		dateNum.setFullYear(year, month);
		current.innerHTML=dateNum.toLocaleString("ru", options);
	}
	showMonth(date);
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
	})
})
