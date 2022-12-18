if(localStorage.getItem("rating") == 1) {
        document.getElementById("_rating_").innerHTML = "You Selected " + localStorage.getItem("rating") + " Star Out Of 5";
        localStorage.clear();
} else {
    document.getElementById("_rating_").innerHTML = "You Selected " + localStorage.getItem("rating") + " Stars Out Of 5";
    localStorage.clear();
}