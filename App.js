// 🔴 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const USER_ID = "demo_user_1"; // testing user

// Recharge
function recharge() {
  const amount = document.getElementById("amount").value;
  db.collection("recharge_requests").add({
    uid: USER_ID,
    amount: amount,
    status: "pending",
    time: new Date()
  });
  alert("Recharge Request Submitted");
}

// Withdraw
function withdraw() {
  db.collection("withdraw_requests").add({
    uid: USER_ID,
    bank: bank.value,
    acc: acc.value,
    ifsc: ifsc.value,
    amount: wamount.value,
    status: "pending",
    time: new Date()
  });
  alert("Withdraw Request Submitted");
}

// Admin View
db.collection("recharge_requests").onSnapshot(snap => {
  let html = "";
  snap.forEach(doc => {
    let d = doc.data();
    html += `<p>${d.uid} - ${d.amount} USDT 
    <button onclick="approve('${doc.id}')">Approve</button></p>`;
  });
  document.getElementById("recharges")?.innerHTML = html;
});

function approve(id){
  db.collection("recharge_requests").doc(id).update({
    status: "approved"
  });
}
