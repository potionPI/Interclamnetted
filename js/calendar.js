/*
Necessary:
	#nextMonthButton - click to move to next month
	#previousMonthButton - click to move to previous month
	#currentMonthButton - click to return to current month

	.boxedToday - colors current date

	#calTitleSpace - the month is shown here

	#box1, #box2, ... , #box42 - the numbered dates are written in here
*/

// User's current date and some information about it
var currentDateFull = new Date();
var currentMonth = currentDateFull.getMonth();
var currentDate = currentDateFull.getDate();
var currentYear = currentDateFull.getFullYear();
var currentDay = currentDateFull.getDay();

// Info for what the user sees
var modifyMonth = 0;
var selectedPage = new Date(currentYear, currentMonth + modifyMonth);
var pageMonth = selectedPage.getMonth();
var pageDate = selectedPage.getDate();
var pageYear = selectedPage.getFullYear();
var pageFirstDay = selectedPage.getDay();

// Ids for changing month view buttons
var nextMonthButton = document.getElementById("nextMonthButton");
var previousMonthButton = document.getElementById("previousMonthButton");
var currentMonthButton = document.getElementById("currentMonthButton");

// Click buttons to change month viewed
nextMonthButton.addEventListener("click", setPageNext);
previousMonthButton.addEventListener("click", setPagePrevious);
currentMonthButton.addEventListener("click", setPageCurrent);
function setPageNext() {
	modifyMonth = modifyMonth + 1;
	selectedPage = new Date(currentYear, currentMonth + modifyMonth, 1);
	pageMonth = selectedPage.getMonth();
	pageDate = selectedPage.getDate();
	pageYear = selectedPage.getFullYear();
	pageFirstDay = selectedPage.getDay();
	writePageMonth();
	currentMonthNow();
	datesFill();
	colorToday();
}
function setPagePrevious() {
	modifyMonth = modifyMonth - 1;
	selectedPage = new Date(currentYear, currentMonth + modifyMonth, 1);
	pageMonth = selectedPage.getMonth();
	pageDate = selectedPage.getDate();
	pageYear = selectedPage.getFullYear();
	pageFirstDay = selectedPage.getDay();
	writePageMonth();
	currentMonthNow();
	datesFill();
	colorToday();
}
function setPageCurrent() {
	modifyMonth = 0;
	selectedPage = new Date(currentYear, currentMonth + modifyMonth, currentDate);
	pageMonth = selectedPage.getMonth();
	pageDate = selectedPage.getDate();
	pageYear = selectedPage.getFullYear();
	pageFirstDay = selectedPage.getDay();
	writePageMonth();
	datesFill();
	colorToday();
}

// Function for retrieving the current date when viewing current month
function currentMonthNow() {
	if (pageMonth == currentMonth && pageYear == currentYear) {
		setPageCurrent();
	}
}

// Function for coloring the current date
function colorToday() {
	if (pageFirstDay == 0 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box1.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box2.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box3.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box4.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box5.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box6.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box31.classList.add("boxedToday");
		} 
	} else if (pageFirstDay == 1 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box2.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box3.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box4.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box5.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box6.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box31.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box32.classList.add("boxedToday");
		}
	} else if (pageFirstDay == 2 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box3.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box4.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box5.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box6.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box31.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box32.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box33.classList.add("boxedToday");
		}
	} else if (pageFirstDay == 3 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box4.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box5.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box6.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box31.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box32.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box33.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box34.classList.add("boxedToday");
		}
	} else if (pageFirstDay == 4 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box5.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box6.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box31.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box32.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box33.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box34.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box35.classList.add("boxedToday");
		}
	} else if (pageFirstDay == 5 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box6.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box31.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box32.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box33.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box34.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box35.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box36.classList.add("boxedToday");
		}
	} else if (pageFirstDay == 6 && pageMonth == currentMonth && pageYear == currentYear) {
		if (currentDate == 1) {
			box7.classList.add("boxedToday");
		} else if (currentDate == 2) {
			box8.classList.add("boxedToday");
		} else if (currentDate == 3) {
			box9.classList.add("boxedToday");
		} else if (currentDate == 4) {
			box10.classList.add("boxedToday");
		} else if (currentDate == 5) {
			box11.classList.add("boxedToday");
		} else if (currentDate == 6) {
			box12.classList.add("boxedToday");
		} else if (currentDate == 7) {
			box13.classList.add("boxedToday");
		} else if (currentDate == 8) {
			box14.classList.add("boxedToday");
		} else if (currentDate == 9) {
			box15.classList.add("boxedToday");
		} else if (currentDate == 10) {
			box16.classList.add("boxedToday");
		} else if (currentDate == 11) {
			box17.classList.add("boxedToday");
		} else if (currentDate == 12) {
			box18.classList.add("boxedToday");
		} else if (currentDate == 13) {
			box19.classList.add("boxedToday");
		} else if (currentDate == 14) {
			box20.classList.add("boxedToday");
		} else if (currentDate == 15) {
			box21.classList.add("boxedToday");
		} else if (currentDate == 16) {
			box22.classList.add("boxedToday");
		} else if (currentDate == 17) {
			box23.classList.add("boxedToday");
		} else if (currentDate == 18) {
			box24.classList.add("boxedToday");
		} else if (currentDate == 19) {
			box25.classList.add("boxedToday");
		} else if (currentDate == 20) {
			box26.classList.add("boxedToday");
		} else if (currentDate == 21) {
			box27.classList.add("boxedToday");
		} else if (currentDate == 22) {
			box28.classList.add("boxedToday");
		} else if (currentDate == 23) {
			box29.classList.add("boxedToday");
		} else if (currentDate == 24) {
			box30.classList.add("boxedToday");
		} else if (currentDate == 25) {
			box31.classList.add("boxedToday");
		} else if (currentDate == 26) {
			box32.classList.add("boxedToday");
		} else if (currentDate == 27) {
			box33.classList.add("boxedToday");
		} else if (currentDate == 28) {
			box34.classList.add("boxedToday");
		} else if (currentDate == 29) {
			box35.classList.add("boxedToday");
		} else if (currentDate == 30) {
			box36.classList.add("boxedToday");
		} else if (currentDate == 31) {
			box37.classList.add("boxedToday");
		}
	} else {
		box1.classList.remove("boxedToday");
		box2.classList.remove("boxedToday");
		box3.classList.remove("boxedToday");
		box4.classList.remove("boxedToday");
		box5.classList.remove("boxedToday");
		box6.classList.remove("boxedToday");
		box7.classList.remove("boxedToday");

		box8.classList.remove("boxedToday");
		box9.classList.remove("boxedToday");
		box10.classList.remove("boxedToday");
		box11.classList.remove("boxedToday");
		box12.classList.remove("boxedToday");
		box13.classList.remove("boxedToday");
		box14.classList.remove("boxedToday");

		box15.classList.remove("boxedToday");
		box16.classList.remove("boxedToday");
		box17.classList.remove("boxedToday");
		box18.classList.remove("boxedToday");
		box19.classList.remove("boxedToday");
		box20.classList.remove("boxedToday");
		box21.classList.remove("boxedToday");

		box22.classList.remove("boxedToday");
		box23.classList.remove("boxedToday");
		box24.classList.remove("boxedToday");
		box25.classList.remove("boxedToday");
		box26.classList.remove("boxedToday");
		box27.classList.remove("boxedToday");
		box28.classList.remove("boxedToday");

		box29.classList.remove("boxedToday");
		box30.classList.remove("boxedToday");
		box31.classList.remove("boxedToday");
		box32.classList.remove("boxedToday");
		box33.classList.remove("boxedToday");
		box34.classList.remove("boxedToday");
		box35.classList.remove("boxedToday");

		box36.classList.remove("boxedToday");
		box37.classList.remove("boxedToday");
		box38.classList.remove("boxedToday");
		box39.classList.remove("boxedToday");
		box40.classList.remove("boxedToday");
		box41.classList.remove("boxedToday");
		box42.classList.remove("boxedToday");
	}
}

// Writing in the calendar month title
var calTitleSpace = document.getElementById("calTitleSpace");

function writePageMonth() {
	if (pageMonth == 0) {
		calTitleSpace.innerHTML = "January";
	} else if (pageMonth == 1) {
		calTitleSpace.innerHTML = "February";
	} else if (pageMonth == 2) {
		calTitleSpace.innerHTML = "March";
	} else if (pageMonth == 3) {
		calTitleSpace.innerHTML = "April";
	} else if (pageMonth == 4) {
		calTitleSpace.innerHTML = "May";
	} else if (pageMonth == 5) {
		calTitleSpace.innerHTML = "June";
	} else if (pageMonth == 6) {
		calTitleSpace.innerHTML = "July";
	} else if (pageMonth == 7) {
		calTitleSpace.innerHTML = "August";
	} else if (pageMonth == 8) {
		calTitleSpace.innerHTML = "September";
	} else if (pageMonth == 9) {
		calTitleSpace.innerHTML = "October";
	} else if (pageMonth == 10) {
		calTitleSpace.innerHTML = "November";
	} else if (pageMonth == 11) {
		calTitleSpace.innerHTML = "December";
	}
}

// Fill in the calendar with numbered dates
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");

var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");
var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");
var box13 = document.getElementById("box13");
var box14 = document.getElementById("box14");

var box15 = document.getElementById("box15");
var box16 = document.getElementById("box16");
var box17 = document.getElementById("box17");
var box18 = document.getElementById("box18");
var box19 = document.getElementById("box19");
var box20 = document.getElementById("box20");
var box21 = document.getElementById("box21");

var box22 = document.getElementById("box22");
var box23 = document.getElementById("box23");
var box24 = document.getElementById("box24");
var box25 = document.getElementById("box25");
var box26 = document.getElementById("box26");
var box27 = document.getElementById("box27");
var box28 = document.getElementById("box28");

var box29 = document.getElementById("box29");
var box30 = document.getElementById("box30");
var box31 = document.getElementById("box31");
var box32 = document.getElementById("box32");
var box33 = document.getElementById("box33");
var box34 = document.getElementById("box34");
var box35 = document.getElementById("box35");

var box36 = document.getElementById("box36");
var box37 = document.getElementById("box37");
var box38 = document.getElementById("box38");
var box39 = document.getElementById("box39");
var box40 = document.getElementById("box40");
var box41 = document.getElementById("box41");
var box42 = document.getElementById("box42");


function datesFill() {
	if (pageFirstDay == 0) {
		box1.innerHTML = "1";
		box2.innerHTML = "2";
		box3.innerHTML = "3";
		box4.innerHTML = "4";
		box5.innerHTML = "5";
		box6.innerHTML = "6";
		box7.innerHTML = "7";

		box8.innerHTML = "8";
		box9.innerHTML = "9";
		box10.innerHTML = "10";
		box11.innerHTML = "11";
		box12.innerHTML = "12";
		box13.innerHTML = "13";
		box14.innerHTML = "14";
		
		box15.innerHTML = "15";
		box16.innerHTML = "16";
		box17.innerHTML = "17";
		box18.innerHTML = "18";
		box19.innerHTML = "19";
		box20.innerHTML = "20";
		box21.innerHTML = "21";

		box22.innerHTML = "22";
		box23.innerHTML = "23";
		box24.innerHTML = "24";
		box25.innerHTML = "25";
		box26.innerHTML = "26";
		box27.innerHTML = "27";
		box28.innerHTML = "28";

		lastDatesFill();
	} else if (pageFirstDay == 1) {
		box1.innerHTML = "&nbsp;";
		box2.innerHTML = "1";
		box3.innerHTML = "2";
		box4.innerHTML = "3";
		box5.innerHTML = "4";
		box6.innerHTML = "5";
		box7.innerHTML = "6";

		box8.innerHTML = "7";
		box9.innerHTML = "8";
		box10.innerHTML = "9";
		box11.innerHTML = "10";
		box12.innerHTML = "11";
		box13.innerHTML = "12";
		box14.innerHTML = "13";
		
		box15.innerHTML = "14";
		box16.innerHTML = "15";
		box17.innerHTML = "16";
		box18.innerHTML = "17";
		box19.innerHTML = "18";
		box20.innerHTML = "19";
		box21.innerHTML = "20";

		box22.innerHTML = "21";
		box23.innerHTML = "22";
		box24.innerHTML = "23";
		box25.innerHTML = "24";
		box26.innerHTML = "25";
		box27.innerHTML = "26";
		box28.innerHTML = "27";

		box29.innerHTML = "28";

		lastDatesFill();
	} else if (pageFirstDay == 2) {
		box1.innerHTML = "&nbsp;";
		box2.innerHTML = "&nbsp;";
		box3.innerHTML = "1";
		box4.innerHTML = "2";
		box5.innerHTML = "3";
		box6.innerHTML = "4";
		box7.innerHTML = "5";

		box8.innerHTML = "6";
		box9.innerHTML = "7";
		box10.innerHTML = "8";
		box11.innerHTML = "9";
		box12.innerHTML = "10";
		box13.innerHTML = "11";
		box14.innerHTML = "12";
		
		box15.innerHTML = "13";
		box16.innerHTML = "14";
		box17.innerHTML = "15";
		box18.innerHTML = "16";
		box19.innerHTML = "17";
		box20.innerHTML = "18";
		box21.innerHTML = "19";

		box22.innerHTML = "20";
		box23.innerHTML = "21";
		box24.innerHTML = "22";
		box25.innerHTML = "23";
		box26.innerHTML = "24";
		box27.innerHTML = "25";
		box28.innerHTML = "26";

		box29.innerHTML = "27";
		box30.innerHTML = "28";

		lastDatesFill();
	} else if (pageFirstDay == 3) {
		box1.innerHTML = "&nbsp;";
		box2.innerHTML = "&nbsp;";
		box3.innerHTML = "&nbsp;";
		box4.innerHTML = "1";
		box5.innerHTML = "2";
		box6.innerHTML = "3";
		box7.innerHTML = "4";

		box8.innerHTML = "5";
		box9.innerHTML = "6";
		box10.innerHTML = "7";
		box11.innerHTML = "8";
		box12.innerHTML = "9";
		box13.innerHTML = "10";
		box14.innerHTML = "11";
		
		box15.innerHTML = "12";
		box16.innerHTML = "13";
		box17.innerHTML = "14";
		box18.innerHTML = "15";
		box19.innerHTML = "16";
		box20.innerHTML = "17";
		box21.innerHTML = "18";

		box22.innerHTML = "19";
		box23.innerHTML = "20";
		box24.innerHTML = "21";
		box25.innerHTML = "22";
		box26.innerHTML = "23";
		box27.innerHTML = "24";
		box28.innerHTML = "25";

		box29.innerHTML = "26";
		box30.innerHTML = "27";
		box31.innerHTML = "28";

		lastDatesFill();
	} else if (pageFirstDay == 4) {
		box1.innerHTML = "&nbsp;";
		box2.innerHTML = "&nbsp;";
		box3.innerHTML = "&nbsp;";
		box4.innerHTML = "&nbsp;";
		box5.innerHTML = "1";
		box6.innerHTML = "2";
		box7.innerHTML = "3";

		box8.innerHTML = "4";
		box9.innerHTML = "5";
		box10.innerHTML = "6";
		box11.innerHTML = "7";
		box12.innerHTML = "8";
		box13.innerHTML = "9";
		box14.innerHTML = "10";
		
		box15.innerHTML = "11";
		box16.innerHTML = "12";
		box17.innerHTML = "13";
		box18.innerHTML = "14";
		box19.innerHTML = "15";
		box20.innerHTML = "16";
		box21.innerHTML = "17";

		box22.innerHTML = "18";
		box23.innerHTML = "19";
		box24.innerHTML = "20";
		box25.innerHTML = "21";
		box26.innerHTML = "22";
		box27.innerHTML = "23";
		box28.innerHTML = "24";

		box29.innerHTML = "25";
		box30.innerHTML = "26";
		box31.innerHTML = "27";
		box32.innerHTML = "28";

		lastDatesFill();
	} else if (pageFirstDay == 5) {
		box1.innerHTML = "&nbsp;";
		box2.innerHTML = "&nbsp;";
		box3.innerHTML = "&nbsp;";
		box4.innerHTML = "&nbsp;";
		box5.innerHTML = "&nbsp;";
		box6.innerHTML = "1";
		box7.innerHTML = "2";

		box8.innerHTML = "3";
		box9.innerHTML = "4";
		box10.innerHTML = "5";
		box11.innerHTML = "6";
		box12.innerHTML = "7";
		box13.innerHTML = "8";
		box14.innerHTML = "9";
		
		box15.innerHTML = "10";
		box16.innerHTML = "11";
		box17.innerHTML = "12";
		box18.innerHTML = "13";
		box19.innerHTML = "14";
		box20.innerHTML = "15";
		box21.innerHTML = "16";

		box22.innerHTML = "17";
		box23.innerHTML = "18";
		box24.innerHTML = "19";
		box25.innerHTML = "20";
		box26.innerHTML = "21";
		box27.innerHTML = "22";
		box28.innerHTML = "23";

		box29.innerHTML = "24";
		box30.innerHTML = "25";
		box31.innerHTML = "26";
		box32.innerHTML = "27";
		box33.innerHTML = "28";

		lastDatesFill();
	} else if (pageFirstDay == 6) {
		box1.innerHTML = "&nbsp;";
		box2.innerHTML = "&nbsp;";
		box3.innerHTML = "&nbsp;";
		box4.innerHTML = "&nbsp;";
		box5.innerHTML = "&nbsp;";
		box6.innerHTML = "&nbsp;";
		box7.innerHTML = "1";

		box8.innerHTML = "2";
		box9.innerHTML = "3";
		box10.innerHTML = "4";
		box11.innerHTML = "5";
		box12.innerHTML = "6";
		box13.innerHTML = "7";
		box14.innerHTML = "8";
		
		box15.innerHTML = "9";
		box16.innerHTML = "10";
		box17.innerHTML = "11";
		box18.innerHTML = "12";
		box19.innerHTML = "13";
		box20.innerHTML = "14";
		box21.innerHTML = "15";

		box22.innerHTML = "16";
		box23.innerHTML = "17";
		box24.innerHTML = "18";
		box25.innerHTML = "19";
		box26.innerHTML = "20";
		box27.innerHTML = "21";
		box28.innerHTML = "22";

		box29.innerHTML = "23";
		box30.innerHTML = "24";
		box31.innerHTML = "25";
		box32.innerHTML = "26";
		box33.innerHTML = "27";
		box34.innerHTML = "28";

		lastDatesFill();
	}
}
function lastDatesFill() {
	if (pageFirstDay == 0) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box29.innerHTML = "29";
				box30.innerHTML = "&nbsp;";
				box31.innerHTML = "&nbsp;";
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box29.innerHTML = "&nbsp;";
				box30.innerHTML = "&nbsp;";
				box31.innerHTML = "&nbsp;";
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box29.innerHTML = "29";
			box30.innerHTML = "30";
			box31.innerHTML = "31";
			box32.innerHTML = "&nbsp;";
			box33.innerHTML = "&nbsp;";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box29.innerHTML = "29";
			box30.innerHTML = "30";
			box31.innerHTML = "&nbsp;";
			box32.innerHTML = "&nbsp;";
			box33.innerHTML = "&nbsp;";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	} else if (pageFirstDay == 1) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box30.innerHTML = "29";
				box31.innerHTML = "&nbsp;";
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box30.innerHTML = "&nbsp;";
				box31.innerHTML = "&nbsp;";
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box30.innerHTML = "29";
			box31.innerHTML = "30";
			box32.innerHTML = "31";
			box33.innerHTML = "&nbsp;";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box30.innerHTML = "29";
			box31.innerHTML = "30";
			box32.innerHTML = "&nbsp;";
			box33.innerHTML = "&nbsp;";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	} else if (pageFirstDay == 2) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box31.innerHTML = "29";
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box31.innerHTML = "&nbsp;";
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box31.innerHTML = "29";
			box32.innerHTML = "30";
			box33.innerHTML = "31";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box31.innerHTML = "29";
			box32.innerHTML = "30";
			box33.innerHTML = "&nbsp;";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	} else if (pageFirstDay == 3) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box32.innerHTML = "29";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box32.innerHTML = "&nbsp;";
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box32.innerHTML = "29";
			box33.innerHTML = "30";
			box34.innerHTML = "31";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box32.innerHTML = "29";
			box33.innerHTML = "30";
			box34.innerHTML = "&nbsp;";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	} else if (pageFirstDay == 4) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box33.innerHTML = "29";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box33.innerHTML = "&nbsp;";
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box33.innerHTML = "29";
			box34.innerHTML = "30";
			box35.innerHTML = "31";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box33.innerHTML = "29";
			box34.innerHTML = "30";
			box35.innerHTML = "&nbsp;";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	} else if (pageFirstDay == 5) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box34.innerHTML = "29";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box34.innerHTML = "&nbsp;";
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box34.innerHTML = "29";
			box35.innerHTML = "30";
			box36.innerHTML = "31";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box34.innerHTML = "29";
			box35.innerHTML = "30";
			box36.innerHTML = "&nbsp;";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	} else if (pageFirstDay == 6) {
		if (pageMonth == 1) {
			if (((pageYear % 4 == 0) && (pageYear % 100 != 0)) || (pageYear % 400 == 0)) {
				box35.innerHTML = "29";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";
			} else {
				box35.innerHTML = "&nbsp;";
				box36.innerHTML = "&nbsp;";
				box37.innerHTML = "&nbsp;";
				box38.innerHTML = "&nbsp;";
				box39.innerHTML = "&nbsp;";
				box40.innerHTML = "&nbsp;";
				box41.innerHTML = "&nbsp;";
				box42.innerHTML = "&nbsp;";

			}
		} else if (pageMonth == 0 || pageMonth == 2 || pageMonth == 4 || pageMonth == 6 || pageMonth == 7 || pageMonth == 9 || pageMonth == 11) {
			box35.innerHTML = "29";
			box36.innerHTML = "30";
			box37.innerHTML = "31";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		} else {
			box35.innerHTML = "29";
			box36.innerHTML = "30";
			box37.innerHTML = "&nbsp;";
			box38.innerHTML = "&nbsp;";
			box39.innerHTML = "&nbsp;";
			box40.innerHTML = "&nbsp;";
			box41.innerHTML = "&nbsp;";
			box42.innerHTML = "&nbsp;";
		}
	}
}

window.onload = function() {
setPageCurrent();
}