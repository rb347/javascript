document.getElementById("btn_check").addEventListener("click", number);

function is_odd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

function display_odd_or_even(number) {
  // Check the size
  let size = "small";
  if (number >= 100) {
    size = "large";
  }

  // Check if Prime
  let prime_text = "and is not prime.";
  if (is_prime(number)) {
    prime_text = "and is a PRIME number";
  }

  // Check if Even or Odd
  let even_or_odd = "Even";
  if (is_odd(number)) {
    even_or_odd = "Odd";
  }

  // display the result
  document.getElementById("results").innerHTML +=
    number +
    " is a " +
    size +
    "  " +
    even_or_odd +
    " Number " +
    prime_text +
    " <br />";
}

function is_prime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// display for all numbers up to 1000
for (let i = 0; i < 1000; i++) {
  display_odd_or_even(i);
}
