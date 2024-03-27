const blogEntry = document.getElementById('button'); 
const mode = document.getElementById('darkLight'); 
const container = document.getElementById('container');
const textArea = document.querySelectorAll('.textarea')



blogEntry.addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    localStorage.setItem("username", username);
    localStorage.setItem("title", title);
    localStorage.setItem("content", content);

    const retrievedUsername = localStorage.getItem("username");
    const retrievedTitle = localStorage.getItem("title");
    const retrievedContent = localStorage.getItem("content");

    console.log("Username:", retrievedUsername);
    console.log("Title:", retrievedTitle);
    console.log("Content:", retrievedContent);


    alert("Your entry has been received!");
    
});

mode.addEventListener("click", function () {
    console.log("clicked")
    
    if (document.body.style.backgroundColor === "azure") {
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "azure"
    };
    
});

mode.addEventListener("click", function () {
    console.log("clicked")

    if (container.style.backgroundColor === "white") {

        container.style.backgroundColor = "grey"
    } else {
        container.style.backgroundColor = "white"
    };
    
});

blogEntry.addEventListener("click", function () {
    window.location.href = 'http://127.0.0.1:5501/blog.html'
})


