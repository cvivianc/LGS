
var postinputbtn = document.getElementById("inputfield");

postinputbtn.addEventListener("keypress", function(event) {
    // Trigger a Button Click on Enter from W3Schools
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("createbtn").click();
    }
});

createbtn.addEventListener("click", function() {
    var postinput = document.getElementById("inputfield");

    if (postinput.value === "") {
        // create alert to prevent empty post
        alert("Your post is empty!");
    } else {
        // library for html html entities
        // Resource from #!shebang Foolproof HTML escaping in Javascript
        str = new String();
        str = postinput.value;
        str = str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");

        // create post, clone the discussion div in html  doc and change <P> with innerHTML
        let creatpost = document.getElementById("posttemplate");
        let newpost = creatpost.cloneNode(true);
        newpost.id = null;
        newpost.childNodes.item(3).innerHTML = str;
        creatpost.parentNode.prepend(newpost);

        // delete input after post
        postinput.value = "";
    }
});

