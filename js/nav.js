window.onload = function(){
	var pearlHome = document.getElementById("pearlHome");
	var pearlHomeText = document.getElementById("pearlHomeText");
	var pearl1 = document.getElementById("pearl1");
	var pearl1Text = document.getElementById("pearl1Text");
	var navVineTFH = document.getElementById("navVineTFH");
	var navVineMiddle = document.getElementById("navVineMiddle");
	var navVineMiddle2 = document.getElementById("navVineMiddle2");
	var navVineBottom = document.getElementById("navVineBottom");

	pearlHome.onmouseover = function() {
		pearlHome.src="{{ site.url }}/assets/pearlHomeFilled.svg";
		pearlHomeText.style.display="none";
	}
	pearlHome.onmouseout = function() {
		pearlHome.src="{{ site.url }}/assets/pearlHome.svg";
		pearlHomeText.style.display="inline-block";
	}
	pearl1.onmouseover = function() {
		pearl1.src="../assets/pearl1Filled.svg";
		pearl1Text.style.display="none";
	}
	pearl1.onmouseout = function() {
		pearl1.src="../assets/pearl1.svg";
		pearl1Text.style.display="inline-block";
	}
	var pearl2 = document.getElementById("pearl2");
	var pearl2Text = document.getElementById("pearl2Text");
	pearl2.onmouseover = function() {
		pearl2.src="../assets/pearl2Filled.svg";
		pearl2Text.style.display="none";
	}
	pearl2.onmouseout = function() {
		pearl2.src="../assets/pearl2.svg";
		pearl2Text.style.display="inline-block";
	}
	navVineTFH.onmouseover = function() {
		navVineTFH.src="../assets/navVineTFH2.svg";
	}
	navVineTFH.onmouseout = function() {
		navVineTFH.src="../assets/navVineTFH.svg"
	}

	function TFHToggle() {
		if (TFHStatus === "show") {
			pearlHome.style.display="none";
			pearlHomeText.style.display="none";
			pearl1.style.display="none";
			pearl1Text.style.display="none";
			pearl2.style.display="none";
			pearl2Text.style.display="none";
			navVineMiddle.style.display="none";
			navVineMiddle2.style.display="none";
			navVineBottom.style.display="none";
		} else {
			pearlHome.style.display="inline-block";
			pearlHomeText.style.display="inline-block";
			pearl1.style.display="inline-block";
			pearl1Text.style.display="inline-block";
			pearl2.style.display="inline-block";
			pearl2Text.style.display="inline-block";
			navVineMiddle.style.display="inline-block";
			navVineMiddle2.style.display="inline-block";
			navVineBottom.style.display="inline-block";
		}
	}

	var TFHStatus = "show";
	navVineTFH.onclick = function() {
		if (TFHStatus === "show") {
			TFHToggle();
			TFHStatus = "hidden";
		} else {
			TFHToggle();
			TFHStatus = "show";
		}
	}

}
