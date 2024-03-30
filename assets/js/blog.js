const blogEntryContainer = document.getElementById("blogEntries");
const blogEntryArray = JSON.parse(localStorage.getItem("blogEntryArray"));


for (let i = 0; i < blogEntryArray.length; i++) {
  const blogDiv = document.createElement("div");
  const usernameDiv = document.createElement("h3");
  const titleDiv = document.createElement("h4");
  const contentDiv = document.createElement("p");

  // add the content to the elements
  blogDiv.classList.add("blogDiv");

  usernameDiv.textContent = blogEntryArray[i].username;
  titleDiv.textContent = blogEntryArray[i].title;
  contentDiv.textContent = blogEntryArray[i].content;

  // append the elements to the the blogEntryContainer

  blogDiv.append(usernameDiv, titleDiv, contentDiv);
  blogEntryContainer.append(blogDiv);
}
