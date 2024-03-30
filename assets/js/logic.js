const mode = document.getElementById("darkLight");

mode.addEventListener("click", function () {
  console.log("clicked");

  if (document.body.style.backgroundColor === "azure") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "azure";
  }
});

mode.addEventListener("click", function () {
  console.log("clicked");

  if (container.style.backgroundColor === "white") {
    container.style.backgroundColor = "grey";
  } else {
    container.style.backgroundColor = "white";
  }
});