console.log("Running formSubmitter.js script");

const google = "https://script.google.com/macros/s/AKfycbwygMviGFGCLFK6VLiidUOUuk0twIFmiKAqpXHKT4aLf5ahacRmwysRNTQAJdX2CAhWaw/exec";

document.getElementById("score_form").addEventListener("submit", sendData);

//Calls apps script
async function sendData(event) {

  event.preventDefault();

  //Gets data from the document
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const value = document.getElementById("value").value;

  // Passed into the body
  const payload = {
    name,
    category,
    value
  };

  try {

    const response = await fetch(google, {
      method: "POST",
      mode: "no-cors",
      headers: { 
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify(payload),
    });


    if (response.ok) {
          // Leave button disabled until page refreshes
          alert("Submission successful!");
      } else {
          // Re-enable if submission failed
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit";
          alert("Submission failed.");
      }
    
    // Force refresh after data submission is complete
    window.location.reload();

  } catch (error) {
    console.error('Error fetching data:', error);
  }

}