const goBack = document.getElementById('goBack')

// // const username = localStorage.getItem

// // if (username) {
    
// // }

// // localStorage.setItem("username", "")

// const h2El = document.getElementById("blogEntry")

// const entry = {
//     username: "Britt",
//     title: "How I made it through",
//     content: "Jesus"
// }

// localStorage.setItem("entry", JSON.stringify(entry));

// const lsObject = JSON.parse(localStorage.getItem("entry"));

// h2El.textContent = lsObject.location

// // localStorage.clear

goBack.addEventListener("click", function () {
    window.location.href = 'http://127.0.0.1:5501/index.html?'
})
