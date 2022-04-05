document.getElementById("btn_check").addEventListener("click", check_number);
document
        .getElementById("number")
        .addEventListener("keyup", function (event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("btn_check").click();

function check_number() {
  let number = document.getElementById("number").value;
  if (number > "") {
    let result = "Unknown";
    if (word === "1") {
      result = "1 is neither prime nor composite number.";
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
        }
        document.getElementById("results").innerHTML +=
          result + " : " + number + "<br/>";
      }
    }
  }
}
