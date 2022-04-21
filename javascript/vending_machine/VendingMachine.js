// Money Formatting: https://stackabuse.com/how-to-format-number-as-currency-string-in-javascript/

let VendingMachine = {
  // Variables / Properties
  items: {
    A1: { item_name: "Fruit Loops", price: 3.5, quantity: 10 },
    A2: { item_name: "Yogurt", price: 1.5, quantity: 10 },
    A3: { item_name: "Snickers", price: 1.75, quantity: 10 },
    B1: { item_name: "M&M's", price: 0.25, quantity: 10 },
    B2: { item_name: "Bubble Gum", price: 0.5, quantity: 10 },
    B3: { item_name: "Orange", price: 1.15, quantity: 10 },
    C1: { item_name: "Reeses Pieces", price: 1.0, quantity: 10 },
    C2: { item_name: "Oreo", price: 1.2, quantity: 10 },
    C3: { item_name: "Grapefruit", price: 2.5, quantity: 10 },
  },
  money_in: 0,

  //  Functions are Below
  format_money: function (price) {
    let dollarUSLocale = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return dollarUSLocale.format(price);
  },
  check_inventory: function(){
    let item = document.getElementById("item_selection").value;
		for (selection in VendingMachine.items) {
      if (selection === item) {
        let item_quantity = VendingMachine.items[selection].quantity;
        if (item_quantity >= 1){
          return true;
        } else {
          return false;
        }
    
      }
    }
  },
  get_item: function () {
		let item = document.getElementById("item_selection").value;
		for (selection in VendingMachine.items) {
		if (selection === item) {
			let item_name = VendingMachine.items[selection].item_name;
			let item_price = VendingMachine.items[selection].price;
			if (item_price <= VendingMachine.money_in) {
			VendingMachine.money_in = VendingMachine.money_in - item_price;
			console.log("Dispensing: " + item + ": " + item_name);
			return;
			} else {
			console.log("You do not have enough money");
			return;
        }
      }
      if (this.check_inventory())
      
    }
    console.log("Item does not exist");
  },
  get_change: function () {
    document.getElementById("change_dispenser").innerHTML =
      VendingMachine.format_money(VendingMachine.money_in);
  },
  add_money: function () {
    let money = document.getElementById("money_in").value;
    VendingMachine.money_in =
      parseFloat(VendingMachine.money_in) + parseFloat(money);
    VendingMachine.show_money_in();
    console.log("add_money called: " + money);
  },
  show_money_in: function () {
    document.getElementById("money_display").innerHTML =
      VendingMachine.format_money(VendingMachine.money_in);
  },
  display_items: function () {
    let html_text = "";
    for (var selection in this.items) {
      var item_name = this.items[selection].item_name;
      var item_price = this.items[selection].price;
      html_text += selection + ": " + item_name + "(" + item_price + ") <br />";
    }
    document.getElementById("vending_options").innerHTML = html_text;
  },
};

// Setup event listeners for the three buttons on the vending machine
document
  .getElementById("btn_get_item")
  .addEventListener("click", VendingMachine.get_item);

document
  .getElementById("btn_get_change")
  .addEventListener("click", VendingMachine.get_change);

document
  .getElementById("btn_add_money")
  .addEventListener("click", VendingMachine.add_money);

document
  .getElementById("item_selection")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btn_get_item").click();

document
  .getElementById("money_in")
  .addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn_add_money").click();

// display the items
VendingMachine.display_items();
