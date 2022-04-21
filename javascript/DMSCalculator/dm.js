

let DMCalc = {
  // properties
  scholar_share: 0,
  scholar_win_rate: 0,
  current_totem_price_usd: 0,
  current_totem_price_php: 0,
  Number_days_played: 0,
  Number_matches_per_day: 0,
  Game_percentage: .03,
  Guild_percentage: 0,
  Total_matches_played: 0,
  Matches_won: 0,
  Matches_lost: 0,
  Daily_task_reward: 30,
  Total_TOTEM_earned: 0,
  Durability_cost: 0,
  NET_TOTEM_earned_for_guild: 0,
  TOTEM_earned_for_scholar: 0,
  NET_TOTEM_earned_per_day_for_guild: 0,

  get_price_update: function() {
    console.log('getting new price');
    jQuery.get("https://api.coingecko.com/api/v3/coins/dragonmaster", function(data) {
      jQuery('#TOTEMusd').val(data.market_data.current_price.usd);
      jQuery('#TOTEMphp').val(data.market_data.current_price.php);
    });
  },

  // get user input from form fields
  setScholarShare: function() {
    this.scholar_share = parseFloat(jQuery('#share').val());
  },
  setScholarWinRate: function() {
    this.scholar_win_rate = parseFloat(jQuery('#win_rate').val());
  },
  setCurrentTotemPriceUSD: function() {
    this.current_totem_price_usd = parseFloat(jQuery('#TOTEMusd').val());
  },
  setCurrentTotemPricePHP: function() {
    this.current_totem_price_php = parseFloat(jQuery('#TOTEMphp').val());
  },
  setNumberDaysPlayed: function() {
    this.Number_days_played = parseFloat(jQuery('#days_played').val());
  },
  setNumberMatchesPerDay: function() {
    this.Number_matches_per_day = parseFloat(jQuery('#matches_per_day').val());
  },
  setGuildPercentage: function() {
    this.Guild_percentage = 1 - this.Game_percentage - this.scholar_share;
  },
  setTotalMatchesPlayed: function() {
    this.Total_matches_played =  this.Number_matches_per_day * this.Number_days_played;
  },
  setMatches: function() {
    this.Matches_won = Math.round (this.Total_matches_played * this.scholar_win_rate);
    this.Matches_lost = this.Total_matches_played - this.Matches_won;
  },
  setTotalTOTEMEarned: function() {
    this.Total_TOTEM_earned = (this.Matches_won * 10) + this.Matches_lost + (this.Daily_task_reward * this.Number_days_played);
  },
  setDurabilityCost: function() {
    this.Durability_cost = this.Total_matches_played * 2;
  },
  setNetTotemEarnedForguild: function() {
    this.NET_TOTEM_earned_for_guild = this.Total_TOTEM_earned - this.Durability_cost;
  },
  setTotemEarnedForScholar: function() {
    this.TOTEM_earned_for_scholar = (this.Daily_task_reward * this.Number_days_played) + ((this.Matches_won * 10 + this.Matches_lost) * this.scholar_share);
  },
  setNetTotemEarnedPerDayForGuild: function() {
    this.NET_TOTEM_earned_per_day_for_guild = (this.Matches_lost + this.Matches_won * 10) - this.Durability_cost;
    },




  // methods
  run: function() {
    // setup
    this.setScholarShare();
    this.setGuildPercentage();
    this.setScholarWinRate();
    this.setCurrentTotemPriceUSD();
    this.setCurrentTotemPricePHP();
    this.setNumberDaysPlayed();
    this.setNumberMatchesPerDay();
    this.setTotalMatchesPlayed();
    this.setMatches();
    this.setTotalTOTEMEarned();
    this.setDurabilityCost();
    this.setNetTotemEarnedForguild();
    this.setTotemEarnedForScholar();
    this.setNetTotemEarnedPerDayForGuild();
    this.display();
  },

  display: function() {
    this.displayWinRateTable();
    this.displayMatchesPlayedTable();
    this.displayDurabilityTable();
  },

  displayWinRateTable: function() {
    let win_rate = parseFloat(this.scholar_win_rate *100).toFixed(1)+"%";
    jQuery('#form_scholar_win_rate').html(win_rate);
    let scholar_share = parseFloat(this.scholar_share *100).toFixed(1)+"%";
    jQuery('#form_scholar_share').html(scholar_share);
    let guild_percentage = parseFloat(this.Guild_percentage * 100).toFixed(2)+ "%";
    jQuery('#form_guild_percentage').html(guild_percentage);
  },

  displayMatchesPlayedTable: function() {
    jQuery('#form_total_matches_played').html(this.Total_matches_played);
    jQuery('#form_won').html(this.Matches_won);
    jQuery('#form_lost').html(this.Matches_lost);
    jQuery('#form_total_in_game_TOTEM_earned').html(this.Total_TOTEM_earned);
  },
  displayDurabilityTable: function() {
    jQuery('#form_durability_cost').html(this.Durability_cost);
    jQuery('#form_NET_TOTEM_earned_for_guild').html(this.NET_TOTEM_earned_for_guild);
    jQuery('#form_TOTEM_earned_for_scholar').html(this.TOTEM_earned_for_scholar);
    jQuery('#form_NET_TOTEM_earned_per_day_for_guild').html(this.NET_TOTEM_earned_per_day_for_guild);
  },

}

// scholar share slider
jQuery("#slider_scholar_share").change( function() {
  let slider_value = this.value / 100;
  jQuery('#share').val(slider_value);
});

// scholar share slider
jQuery("#slider_win_rate").change( function() {
  let slider_value = this.value / 100;
  jQuery('#win_rate').val(slider_value);
});

// Add Event Listeners to all input fields
jQuery( "input" ).change( function() {
  DMCalc.run();
});

// run when page loads
DMCalc.get_price_update();

// update price every 30 seconds
setInterval(DMCalc.get_price_update, 30000);

// update the page for the first time when the page loads
DMCalc.run();
