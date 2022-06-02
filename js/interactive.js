function addreplybtn() {
    let addreply = document.createElement('button');
    const replybtn = document.querySelector('.threads')
    addreply.className = 'replystyle';
    replybtn.prepend(addreply);
}

function addprofileimg() {
    let addprofile = document.createElement('img');
    const profileimg = document.querySelector('.threads')
    addprofile.className = 'profile';
    addprofile.src = '../img/profile.svg'
    profileimg.prepend(addprofile);
}

createbtn.addEventListener('click', function() {
    // let input = document.getElementById("input");
    // let create = document.getElementsByClassName('threads')[0];
    // create.insertAdjacentHTML(
    //     'afterbegin',
    //     `<p>${input.value}</p>`
    // );

    // input.value = '';
    // create.insertAdjacentHTML(
    //     'afterbegin',
    // );

    var input = document.getElementById("input");
    let creatpost = document.getElementsByClassName('threads')[0];
    let post = document.createElement('p');

    post.textContent = input.value;
    creatpost.prepend(post);
    addreplybtn();
    addprofileimg();
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