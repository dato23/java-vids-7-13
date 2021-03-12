var btns = document.querySelectorAll("#book-list.delete");

Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement;

    li.parentNode.removeChild(li);
  });
});

const link = document.querySelector("#page-banner a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("navigation to", e.target.textContent, "was prevented");
});

const bookList = document.querySelector("#book-list");

console.log("book-list next sibling is:", bookList.nextSibling);
console.log("book-list next element sibling is:", bookList.nextElementSibling);

console.log("book-list previous sibling is:", bookList.previousSibling);
console.log(
  "book-list previous element sibling is:",
  bookList.previousElementSibling
);

bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br/>Too cool for everyone else";

console.log("the parent node is:", bookList.parentNode);
console.log("the parent element is:", bookList.parentElement.parentElement);

console.log(bookList.children);
