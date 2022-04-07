
function get_pega_score(pega) {
	let fire_score = 0;
	let wind_score = 0;
	let water_score = 0;
  let speed_score = 0;
  let strength_score = 0;
	let lightining_score = 0;

	// get Fire Score
	if (pega.fire >= 8) {
		fire_score = 4;
	} else if (pega.fire >= 7) {
		fire_score = 3;
	} else if (pega.fire >= 6) {
		fire_score = 2
	} else if (pega.fire >= 5) {
		fire_score = 1;
	} else {
		fire_score = 0;
	}

	// get water Score
	if (pega.water = 0) {
		water_score = 4;
	} else if (pega.water <= 2) {
		water_score = 3;
	} else if (pega.water <= 4) {
		water_score = 2
	} else if (pega.water >= 5) {
		water_score = 1;
	} else {
		water_score = 0;
	}

  // get wind Score
	if (pega.wind = 0) {
		wind_score = 8;
	} else if (pega.wind = 1) {
		wind_score = 7;
	} else if (pega.wind = 2) {
		wind_score = 6
	} else if (pega.wind = 3) {
		wind_score = 5;
	}  else if (pega.wind = 4) {
		wind_score = 4;
	} else if (pega.wind = 5) {
		wind_score = 3
	} else if (pega.wind = 6) {
		wind_score = 2;
	} else {
		wwind_score = 0;
	}

   // get wind Score
	if (pega.speed = 0) {
		speed_score = 8;
	} else if (pega.speed = 1) {
		speed_score = 7;
	} else if (pega.speed = 2) {
		speed_score = 6
	} else if (pega.speed = 3) {
		speed_score = 5;
	}  else if (pega.speed = 4) {
		speed_score = 4;
	} else if (pega.speed = 5) {
		speed_score = 3
	} else if (pega.speed = 6) {
		speed_score = 2;
	} else {
		speed_score = 0;
	}

   // get wind Score
	if (pega.strength = 0) {
		strength_score = 8;
	} else if (pega.strength = 1) {
		strength_score = 7;
	} else if (pega.strength = 2) {
		strength_score = 6
	} else if (pega.strength = 3) {
		strength_score = 5;
	}  else if (pega.strength = 4) {
		strength_score = 4;
	} else if (pega.strength = 5) {
		strength_score = 3
	} else if (pega.strength = 6) {
		strength_score = 2;
	} else {
		strength_score = 0;
	}

   // get wind Score
	if (pega.lightining = 0) {
		lightining_score = 8;
	} else if (pega.lightining = 1) {
    lightining_score = 8;
    = 7;
	} else if (pega.lightining = 2) {
    lightining_score = 8;
    = 6
	} else if (pega.lightining = 3) {
    lightining_score = 8;
    = 5;
	}  else if (pega.lightining = 4) {
    lightining_score = 8;
    = 4;
	} else if (pega.lightining = 5) {
    lightining_score = 8;
    = 3
	} else if (pega.lightining = 6) {
    lightining_score = 8;
    = 2;
	} else {
    lightining_score = 8;
    = 0;
	}


	return fire_score + wind_score + water_score;
}



let pega = {pega_id: 1, fire: 8.9, wind: 3.4, strength: 8, speed: 3, water: 6.1, lightning: 5 };
let score = get_pega_score(pega);

document.write(JSON.stringify(pega));
document.write("<br /> Score: ");
document.write(score);