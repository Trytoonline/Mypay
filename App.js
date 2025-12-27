function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function recharge() {
  alert("Recharge request submitted (Demo)");
}

function withdraw() {
  alert("Withdraw request submitted (Demo)");
}
