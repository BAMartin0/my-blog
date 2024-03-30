const button = document.getElementById("blogEntry");
const container = document.getElementById("container");
const textArea = document.querySelectorAll(".textarea");
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");

button.addEventListener("submit", function (event) {
  event.preventDefault();

  const blogEntry = {
    username: username.value,
    title: title.value,
    content: content.value,
  };

  handleLocalStorage(blogEntry);

  window.location.href = "./blog.html";
});

function handleLocalStorage(blogEntry) {
  const blogEntryArray =
    JSON.parse(localStorage.getItem("blogEntryArray")) || [];

  blogEntryArray.push(blogEntry);

  localStorage.setItem("blogEntryArray", JSON.stringify(blogEntryArray));
}