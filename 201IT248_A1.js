var titles = [];
var curr = "";
function signup(){
    let email = document.getElementById('email1').value;
    alert(`user with email : ${email} signed up!!`);
    document.getElementById('user').value = email;
}
function signin(){
    let email = document.getElementById('email2').value;
    alert(`user with email : ${email} logged in!!`);   
}
function createBlog(){
    let title = document.getElementById('title').value;
    let subtitle = document.getElementById('subtitle').value;
    let text = document.getElementById('blog').value;
    titles.push(title);
    alert(`Blog created! \ntitle : ${title}  subtitle : ${subtitle} \nBlogText : ${text}`);
}

function q(){
    var email3 = document.getElementById('email3').value;
    var query = document.getElementById('query').value;
    alert(`user ${email3} asked query : ${query}`);
}

function findBlog(){
    var title = document.getElementById('titblog').value;
    var ans = 0;
    var i = 0;
    for(i=0;i<titles.length;i++){
        if(titles[i] === title){ ans = 1;}
    }
    console.log(ans);
    if(ans) alert(`there is one blog titled ${title}`);
    else alert("sorry there is no such email!!");
}