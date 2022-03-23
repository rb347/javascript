 // Money Formatting: https://stackabuse.com/how-to-format-number-as-currency-string-in-javascript/

let VendingMachine = {
	// Variables / Properties
	items: {
		"A1": {"item_name": "Fruit Loops", "price": 3.50},
		"A2": {"item_name": "Yogurt", "price": 1.50},
		"A3": {"item_name": "Snickers", "price": 1.75},
		"B1": {"item_name": "M&M's", "price": .25},
		"B2": {"item_name": "Bubble Gum", "price": .50},
		"B3": {"item_name": "Orange", "price": 1.15},
		"C1": {"item_name": "Reeses Pieces", "price": 1.00},
		"C2": {"item_name": "Oreo", "price": 1.2},
		"C3": {"item_name": "Grapefruit", "price": 2.50}
	},
	money_in: 0,
	customer_change: 1,

	//  Functions are Below
	format_money: function(price) {
		let dollarUSLocale = Intl.NumberFormat('en-US');
		return dollarUSLocale.format(price);
	},
	get_item: function() {
		let item = document.getElementById('item_selection').value;
		console.log('Customer wants: ' + item);
	},
	get_change: function() {
		// console.log(this); // look at what 'this' points at
		document.getElementById('change_dispenser').innerHTML = VendingMachine.format_money(VendingMachine.customer_change);
	},
	add_money: function () {
		console.log('add_money clicked');
	},
	show_money_in: function() {
		console.log('show_money_in clicked');
	},
	display_items: function() {
		let html_text = '';
		for (var selection in this.items) {
				var item_name = this.items[selection].item_name;
				var item_price = this.items[selection].price;
				html_text += selection + ': ' + item_name + '('+ item_price +') <br />';
		}
		document.getElementById('vending_options').innerHTML = html_text;
	},
	show_money_change: function() {
		document.getElementById('change_dispenser').text = 'Here is your change: ' + this.customer_change;
	},
}

// Setup event listeners for the three buttons on the vending machine
document.getElementById('btn_add_money').addEventListener("click", VendingMachine.add_money);
document.getElementById('btn_get_item').addEventListener("click", VendingMachine.get_item);
document.getElementById('btn_get_change').addEventListener("click", VendingMachine.get_change);


// display the items
VendingMachine.display_items();