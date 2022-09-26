// Function to get response
function button1_function() {
  let loader = document.getElementById("loader");
  let buttonText = document.getElementById("buttonText");
  let resultText = document.getElementById("resultText");
  let resultContainer = document.getElementById("resultContainer");

  resultText.style.display = "none";
  resultContainer.style.display = "none";
  loader.style.display = "inline-block";
  buttonText.style.display = "none";
  textgen_URL = window.location.origin + "/.netlify/functions/get_text_openai";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", textgen_URL, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {

    if (xhr.status === 200) {
      resultText.innerHTML = xhr.responseText;
    } else {
      resultText.innerHTML = "Sorry, GPT-3 took a long time to respond. Please try a different prompt.";
    }

    //resultText.innerHTML = xhr.responseText;
    resultText.style.display = "block";
    resultContainer.style.display = "block";
    loader.style.display = "none";
    buttonText.style.display = "inline-block";
  }
  let text1 = document.getElementById("text1").value;
  text1 = JSON.stringify(text1);
  let POSTdata = `{"query": ${text1}, "temperature": "0.5", "authToken": "${document.getElementById("passcode").value}"}`;
  console.log(POSTdata);
  xhr.send(POSTdata);
}

function onInputChange() {
  let input1 = document.getElementById("text1");
  let submitButton = document.getElementById("submitButton");
  submitButton.disabled = input1.value.length === 0;
}

//Function to validate passcode
function validatePasscode() {
  let loader = document.getElementById("authLoader");
  let buttonText = document.getElementById("authButtonText");
  let authPage = document.getElementById("authPage");
  let promptPage = document.getElementById("promptPage");
  loader.style.display = "inline-block";
  buttonText.style.display = "none";
  check_URL = window.location.origin + "/.netlify/functions/verifytoken";
  let xhr1 = new XMLHttpRequest();
  xhr1.open("POST", check_URL, true);
  xhr1.setRequestHeader("Accept", "application/json");
  xhr1.setRequestHeader("Content-Type", "application/json");
  xhr1.onload = function () {
    loader.style.display = "none"; // this makes the spinner stop spinning
    buttonText.style.display = "inline-block";
    if (xhr1.status === 200) {
      authPage.style.display = "none";
      promptPage.style.display = "block";
    } else {
      $('#errorModal').modal('show');
    }
  }
  let POSTdata1 = `{"user_token": "${document.getElementById("passcode").value}"}`;
  console.log(POSTdata1);
  xhr1.send(POSTdata1);
}


function onPasscodeInputChange() {
  let passcode = document.getElementById("passcode");
  let passcodeSubmitButton = document.getElementById("authSubmitButton");
  passcodeSubmitButton.disabled = passcode.value.length === 0;
}

//Function to show prompt
function showPrompt() {
  $('#promptModal').modal({ backdrop: 'static', keyboard: false });
}