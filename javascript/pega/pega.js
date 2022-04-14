
let pega_table = {
  pega_stats:{
    {pega_id: 1, fire: 0, wind: 1, strength: 2, speed: 3, water: 4, lightning: 5 },
    {pega_id: 2, fire: 6, wind: 7, strength: 0, speed: 8, water: 0, lightning: 0 },
    {pega_id: 3, fire: 8, wind: 0, strength: 0, speed: 8, water: 0, lightning: 0 },
  }

  function get_pega_score(pega) {
    let fire_score = 0;
	let wind_score = 0;
	let water_score = 0;
  let speed_score = 0;
  let strength_score = 0;
	let lightning_score = 0;

	// get Fire Score
	if (pega.fire >= 8) {
    fire_score = 4;
	} else if (pega.fire >= 7) {
    fire_score = 3;
	} else if (pega.fire >= 6) {
    fire_score = 2;
	} else if (pega.fire >= 5) {
    fire_score = 1;
	} else {
    fire_score = 0;
	}

	// get water Score
	if (pega.water >= 5) {
    water_score = 1;
	} else if (pega.water >= 4) {
    water_score = 2;
	} else if (pega.water >= 3) {
    water_score = 3;
	} else if (pega.water >= 2) {
    water_score = 4;
	} else if (pega.water >= 1) {
    water_score = 5;
  } else if (pega.water >= 0) {
    water_score = 6;
  } else {
    water_score = 0;
	}

  // get wind Score
	if (pega.wind >= 3) {
    wind_score = 1;
	} else if (pega.wind >= 2) {
    wind_score = 2;
	} else if (pega.wind >= 1) {
    wind_score = 3;
	} else if (pega.wind >= 0) {
    wind_score = 4;
	}else {
    wind_score = 0;
	}

  // get speed Score
	if (pega.speed >= 8) {
    speed_score = 4;
	} else if (pega.speed >= 7) {
    speed_score = 3;
	} else if (pega.speed >= 6) {
    speed_score = 2;
	} else if (pega.speed >= 5) {
    speed_score = 1;
	}else {
    speed_score = 0;
	}

   // get strength Score
   if (pega.strength >= 3) {
     strength_score = 1;
    } else if (pega.strength >= 2) {
      strength_score = 2;
    } else if (pega.strength >= 1) {
      strength_score = 3;
    } else if (pega.strength >= 0) {
      strength_score = 4;
    }  else {
      strength_score = 0;
    }

    // get lightining Score
    if (pega.lightning >= 3) {
      lightning_score = 1;
    } else if (pega.lightning >= 2) {
      lightning_score = 2;
    } else if (pega.lightning >= 1) {
      lightning_score = 3;
    } else if (pega.lightning >= 0) {
      lightning_score = 4;
    } else {
      lightning_score = 0;
    }


    return fire_score + wind_score + water_score + speed_score + strength_score + lightning_score;
  }
};


  let pega = {pega_id: 1, fire: 8, wind: 0, strength: 0, speed: 8, water: 0, lightning: 0 };
  let score = get_pega_score(pega);

  document.write(JSON.stringify(pega));
  document.write("<br /> Score: ");
  document.write(score);