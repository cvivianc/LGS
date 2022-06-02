createbtn.addEventListener('click', function() {
    var postinput = document.getElementById("inputfield");

    if (postinput.value === '') {
        // create alert to prevent empty post
        alert('Your post is empty!');
    } else {
        // library for html html entities 
        str = new String();
        str = postinput.value;
        str = str.replaceAll('<', '&lt;').replaceAll('<', '&gt;');

        // create post, clone the discussion div in html  doc and change <P> with innerHTML
        let creatpost = document.getElementById('posttemplate');
        let newpost = creatpost.cloneNode(true);
        newpost.id = null;
        newpost.childNodes.item(3).innerHTML = str;
        creatpost.parentNode.prepend(newpost);

        // delete input after post
        postinput.value = '';

    }

});

// const replybtn = document.querySelector('.replybtnjs');

// replybtn.addEventListener('click', function() {
//     var replyinput = document.getElementById("replyinput");
//     let createreply = document.getElementById('replytemplate');
//     let newreply = createreply.cloneNode(true);
//     newreply.id = null;
//     newreply.childNodes.item(3).innerHTML = replyinput.value;


//     // creatpost.parentNode.prepend(newpost);
//     // postinput.value = '';
// });




// var element = document.getElementById("input");

// element.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         var postenter = document.getElementById("input");
//         console.log(postenter.value);
//         postenter.value = '';
//     }



// });