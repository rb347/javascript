let DMCalc = {
  // properties
  scholar_share: 0,
  scholar_win_rate: 0,
  current_totem_price_usd: 0,
  current_totem_price_php: 0,
  Number_days_palyed: 0,
  Number_matches_per_day: 0,

  // get user input from form fields
  setScholarShare: function() {
    this.scholar_share = jQuery('#share').val();
  },
  setScholarWinRate: function() {
    this.scholar_win_rate = jQuery('#win_rate').val();
  },
  setCurrentTotemPriceUSD: function() {
    this.current_totem_price_usd = jQuery('#TOTEMusd').val();
  },
  setCurrentTotemPricePHP: function() {
    this.current_totem_price_php = jQuery('#TOTEMphp').val();
  },
  setNumberDaysPlayed: function() {
    this.Number_days_palyed = jQuery('#days_played').val();
  },
  setNumberMatchesPerDay: function() {
    this.Number_matches_per_day = jQuery('#matches_per_day').val();
  },

  // methods
  run: function() {
    // setup
    this.setScholarShare();
    this.setScholarWinRate();
    this.setCurrentTotemPriceUSD();
    this.setCurrentTotemPricePHP();

    this.display();
  },

  display: function() {
    this.displayWinRateTable();
    // this.displayMatchesPlayedTable();
    // this.displayDurabilityTable();
  },

  displayWinRateTable: function() {
    let win_rate = parseFloat(this.scholar_win_rate *100).toFixed(1)+"%";
    jQuery('#form_scholar_win_rate').html(win_rate);
    let scholar_share = parseFloat(this.scholar_share *100).toFixed(1)+"%";
    jQuery('#form_scholar_share').html(scholar_share);
  }

}

DMCalc.run();


// Add Event Listeners to all input fields
jQuery( "input" ).change( function() {
  DMCalc.run();
});
