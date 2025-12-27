
let balance = 0;

function recharge() {
  let amt = document.getElementById("amount").value;
  if (!amt || amt <= 0) {
    alert("Enter valid amount");
    return;
  }
  alert("Recharge request submitted: " + amt + " USDT");
}

function withdraw() {
  let amt = document.getElementById("wamount").value;
  if (!amt || amt <= 0) {
    alert("Enter valid withdraw amount");
    return;
  }
  alert("Withdraw request submitted");
}
