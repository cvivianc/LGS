createbtn.addEventListener('click', function() {
    var post = document.getElementById("input").value;
    alert(post);
});

var element = document.getElementById("input");

element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var postenter = document.getElementById("input").value;
        alert(postenter);
        event.preventDefault();
    }
});