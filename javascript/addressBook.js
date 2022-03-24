let AddressBook = {
  
  add: function(address) {
    this.book.push(address);
  },
  remove: function(index) {
    this.book.splice(index, 1);
  },
  print: function() {
    for(const address of this.book) {
      console.log(address);
    }
  },
  search: function(keyword) {
    let keyword_lower = keyword.toLowerCase();
    for(let address of this.book) {
      address_lower = address.toLowerCase();
      if (address_lower.includes(keyword_lower)) {
        console.log(address);
      }
    }
  }
}

// sample usage
AddressBook.add('adfasdf');
AddressBook.add('ABCD');
AddressBook.add('special');
AddressBook.add('joey');
AddressBook.add('street address here');
AddressBook.add('world');

AddressBook.book = [];

AddressBook.book.push('another');
AddressBook.print();
