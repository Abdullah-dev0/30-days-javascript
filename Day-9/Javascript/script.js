// Activity 1 : Dom Manipulation

// Task 1 : Select an Html element by its id and change its text content.

const changeContent = document.getElementById("task-1");

changeContent.innerHTML = "Hey my name is Jhon Doe";

// Task 2 : Select an Html element by its class and change its background color.

const changeBackgroundColour = document.getElementsByClassName("task-2");

changeBackgroundColour[0].style.backgroundColor = "red";

// -------------- or you can also use querySelector --------

const changeBackgroundColour2 = document.querySelector(".task-2");

changeBackgroundColour2.style.backgroundColor = "yellow";

// ----------------------- Activity 2 : Creating and appending elements

// Task 3 : Create a new div element with some content and append it to the body of the html document.

const newDiv = document.createElement("div");

newDiv.innerHTML = "This is a new div element";

document.body.appendChild(newDiv);

// Task 4 : Create a new li element and add it to exting ul list".

const newList = document.createElement("li");

const getUl = document.getElementById("task-4");

newList.innerHTML = "This is a new list item";

getUl.appendChild(newList);

// Activity 3 : Removing elements

// Task 5 : Select an element and remove it from Dom.
const removeElement = document.getElementById("task-5");

removeElement.remove();

// Task 6: Remove the last child of a specific HTMl Element.

const removeLastChild = document.getElementById("task-4");

removeLastChild.lastElementChild.remove();

// ------------------------- Acticity 4 : Modifying Attributes and classs

// Task 7 : Select an element and chnage one its attribute (e.g . src to img tag).

const changeAttribute = document.getElementById("task-7");

changeAttribute.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

// Task 8 : Add and remove a css class to/from and html element .

const addAndRemoveClass = document.getElementById("task-8");

addAndRemoveClass.classList.remove("task-8");

addAndRemoveClass.classList.add("task-8-2");

// ------------------------- Activity 5 : Event Handling

// Task 9 : Add an  click event listener to a button that change the text content of  a paragraph.

const getButtonById = document.getElementById("task-9");
const getContent = document.getElementById("contentToChange");

getButtonById.addEventListener("click", () => {
	getContent.innerHTML = "Content changed";
});

// Task 10: add a mouseover event listener to an element that change its border color.

const changeBroderColor = document.getElementById("task-10");

changeBroderColor.addEventListener("mouseover", function () {
	changeBroderColor.style.border = "2px solid red";
});
