document
  .getElementById("btn_check")
  .addEventListener("click", check_word);


	function check_word() {
		let word = document.getElementById('word').value;
		if (word > '') {
				let result = 'Unknown';
				if (word == 'red') {
					result = 'color';
				}
				if (word == 'apple') {
					result = 'fruit';
				}
				document.getElementById('results').innerHTML += result + " : " + word + "<br/>";
		}
	}