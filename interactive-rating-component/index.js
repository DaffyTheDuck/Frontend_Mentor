const submit_button = document.getElementById('submit-button');

// getting buttons by their id
const one_star = document.getElementById("1");
const two_star = document.getElementById("2");
const three_star = document.getElementById("3");
const four_star = document.getElementById("4");
const five_star = document.getElementById("5");

// adding event listeners to the buttons
one_star.addEventListener("click", function() {
    localStorage.setItem("rating", 1);
    console.log(localStorage.getItem("rating"));
});
two_star.addEventListener("click", function() {
    localStorage.setItem("rating", 2);
    console.log(localStorage.getItem("rating"));
});
three_star.addEventListener("click", function() {
    localStorage.setItem("rating", 3);
    console.log(localStorage.getItem("rating"));
});
four_star.addEventListener("click", function() {
    localStorage.setItem("rating", 4);
    console.log(localStorage.getItem("rating"));
});
five_star.addEventListener("click", function() {
    localStorage.setItem("rating", 5);
    console.log(localStorage.getItem("rating"));
});

submit_button.addEventListener("click", function () {
    // load the thank you page based on local storage value
    if(localStorage.getItem("rating") == 1) {
        window.location.href = "thankyou.html";
        localStorage.setItem("rating", 1);
    } else if(localStorage.getItem("rating") == 2) {
        window.location.href = "thankyou.html";
        localStorage.setItem("rating", 2);
    }
    else if(localStorage.getItem("rating") == 3) {
        window.location.href = "thankyou.html";
        localStorage.setItem("rating", 3);
    }
    else if(localStorage.getItem("rating") == 4) {
        window.location.href = "thankyou.html";
        localStorage.setItem("rating", 4);
    }
    else if(localStorage.getItem("rating") == 5) {
        window.location.href = "thankyou.html";
        localStorage.setItem("rating", 5);
    } else {
        alert("Please select a rating");
    }
});