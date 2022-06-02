createbtn.addEventListener('click', function() {
    var post = document.getElementById("input");
    console.log(post.value);
    post.value = '';

});



var element = document.getElementById("input");

element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var postenter = document.getElementById("input");
        console.log(postenter.value);
        postenter.value = '';
    }


});