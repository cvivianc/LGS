createbtn.addEventListener('click', function() {
    var input = document.getElementById("input");
    let creatpost = document.getElementsByTagName('p')[0];
    let post = document.createElement('p');
    post.textContent = input.value;
    creatpost.appendChild(post);
    input.value = '';

});



var element = document.getElementById("input");

element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var postenter = document.getElementById("input");
        console.log(postenter.value);
        postenter.value = '';
    }
});

// btncreate.addEventListener('click', () => {
//     let creatpost = document.getElementsByTagName('p')[0];
//     const input = document.querySelector('.createfield');
//     let post = document.createElement('p');
//     post.textContent = input.value;
//     creatpost.appendChild(li);
//     input.value = '';
// });