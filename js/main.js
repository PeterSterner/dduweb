function navHandler(page) {
  loadHTML(page);
}

function loadHTML(page) {
  fetch(page + ".html")
    .then((response) => response.text())
    .then((text) => {
      document.getElementById("content").innerHTML = convertToHTML(text);
    });
}

function convertToHTML(str) {
  let doc = new DOMParser().parseFromString(str, "text/html");
  console.log(doc.body.innerHTML);
  return doc.body.innerHTML;
}

navHandler("home");
