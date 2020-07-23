var db = firebase.firestore();

function storeData() {
 
  var inputPun = document.getElementById("email").value;
 
     db.collection("users").doc(inputPun).set({
         email : inputPun
     })
     .then(function() {
         console.log("Doc successful");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });
}