const welcomeMessage = document.getElementById("welcome-message");

// Selecting sections
const homeSection = document.getElementById("home");
const destinationsSection = document.getElementById("destinations");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

// Selecting nav buttons
const homeBtn = document.getElementById("homeBtn");
const destinationsBtn = document.getElementById("destinationsBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

// Event listener that triggers when the page is loaded
window.addEventListener("load", (e) => {
  const hours = new Date().getHours(); // Getting hours by combining Date() and getHours() functions

  if (hours > 4 && hours < 12) {
    welcomeMessage.innerText = `Good Morning! Ready for an eco-adventure?`;
  } else if (hours >= 12 && hours < 18) {
    welcomeMessage.innerText = "Good Afternoon! Plan your next green getaway!";
  } else {
    welcomeMessage.innerText =
      "Good Evening! Explore our sustainable travel options!";
  }
});

// A function responsible for changing sections by showing selected section and hiding other sections.
const handleSectionChange = (section) => {
  if (section == "home") {
    homeBtn.classList.add("selectedBtn");
    destinationsBtn.classList.remove("selectedBtn");
    aboutBtn.classList.remove("selectedBtn");
    contactBtn.classList.remove("selectedBtn");
    homeSection.style.display = "block";
    destinationsSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (section == "destinations") {
    homeBtn.classList.remove("selectedBtn");
    destinationsBtn.classList.add("selectedBtn");
    aboutBtn.classList.remove("selectedBtn");
    contactBtn.classList.remove("selectedBtn");
    homeSection.style.display = "none";
    destinationsSection.style.display = "block";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
  } else if (section == "about") {
    homeBtn.classList.remove("selectedBtn");
    destinationsBtn.classList.remove("selectedBtn");
    aboutBtn.classList.add("selectedBtn");
    contactBtn.classList.remove("selectedBtn");
    homeSection.style.display = "none";
    destinationsSection.style.display = "none";
    aboutSection.style.display = "block";
    contactSection.style.display = "none";
  } else if (section == "contact") {
    homeBtn.classList.remove("selectedBtn");
    destinationsBtn.classList.remove("selectedBtn");
    aboutBtn.classList.remove("selectedBtn");
    contactBtn.classList.add("selectedBtn");
    homeSection.style.display = "none";
    destinationsSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "block";
  }
};

// Selecting rows from table
const rowOne = document.getElementById("table-row-one");
const rowTwo = document.getElementById("table-row-two");
const rowThree = document.getElementById("table-row-three");
const rowFour = document.getElementById("table-row-four");
const rowFive = document.getElementById("table-row-five");

// Selecting all rows
const allRows = document.querySelectorAll("tr");

// Selecting description items
const descQueenstown = document.getElementById("desc-queenstown");
const descKruger = document.getElementById("desc-kruger");
const descKyoto = document.getElementById("desc-kyoto");
const descTorres = document.getElementById("desc-torres");
const descSantorini = document.getElementById("desc-santorini");

const allDesc = document.querySelectorAll(".desc-item");

// Function that handles highlighting of the packages, and displaying the package that was highlighted
const handleHighlight = (package) => {
  switch (package) {
    case "queenstown":
      allRows.forEach((row) => {
        row.classList.remove("highlighted");
      });
      rowOne.classList.add("highlighted");

      allDesc.forEach((desc) => {
        desc.style.display = "none";
      });
      descQueenstown.style.display = "block";
      break;
    case "kruger":
      allRows.forEach((row) => {
        row.classList.remove("highlighted");
      });
      rowTwo.classList.add("highlighted");
      allDesc.forEach((desc) => {
        desc.style.display = "none";
      });
      descKruger.style.display = "block";
      break;
    case "kyoto":
      allRows.forEach((row) => {
        row.classList.remove("highlighted");
      });
      rowThree.classList.add("highlighted");
      allDesc.forEach((desc) => {
        desc.style.display = "none";
      });
      descKyoto.style.display = "block";
      break;
    case "torres":
      allRows.forEach((row) => {
        row.classList.remove("highlighted");
      });
      rowFour.classList.add("highlighted");
      allDesc.forEach((desc) => {
        desc.style.display = "none";
      });
      descTorres.style.display = "block";
      break;
    case "santorini":
      allRows.forEach((row) => {
        row.classList.remove("highlighted");
      });
      rowFive.classList.add("highlighted");
      allDesc.forEach((desc) => {
        desc.style.display = "none";
      });
      descSantorini.style.display = "block";
      break;
  }
};

const form = document.querySelector("#contact-form");

// Event listener that displays a successful message when the form is submitted
form.addEventListener(
  "submit",
  (handleSubmit = (e) => {
    e.preventDefault();
    form.reset();
    Swal.fire({
      title: "Done!",
      text: "Message sent successfuly!",
      icon: "OK",
      confirmButtonColor: "#75c987",
    });
  })
);
