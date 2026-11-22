
/* =====================================
   YULI'S BAKERY SHOP
   WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   ACTIVITY LINKS
===================================== */

const activities = [
    { title: "About Myself", link: "activities/ACT1_INOT_IANNY.html" },
    { title: "My Favorite Poem", link: "activities/ACT2_INOT_IANNY.html" },
    { title: "Cherry Blossoms Gallery", link: "activities/ACT3_INOT_IANNY.html" },
    { title: "Tree Quiz", link: "activities/ACT4_INOT_IANNY.html" },
    { title: "My Picture Gallery", link: "activities/ACT5_INOT_IANNY.html" }
];


/* =====================================
   EXERCISE LINKS
===================================== */


const exercises = [
    { title: "Hello World", link: "exercises/EXE1_INOT_IANNY.html" },
    { title: "My Personal Information", link: "exercises/EXE2_INOT_IANNY.html" },
    { title: "About Myself", link: "exercises/EXE3_INOT_IANNY.html" },
    { title: "Font Tag Attributes", link: "exercises/EXE4_INOT_IANNY.html" },
    { title: "HTML Formatting Tags", link: "exercises/EXE5_INOT_IANNY.html" },
    { title: "My Favorite Quotes", link: "exercises/EXE6_INOT_IANNY.html" },
    { title: "A Story Written in Pink", link: "exercises/EXE7_INOT_IANNY.html" },
    { title: "Cherry Blossoms", link: "exercises/EXE8_INOT_IANNY.html" },
    { title: "List Tags", link: "exercises/EXE9_INOT_IANNY.html" },
    { title: "List Tags", link: "exercises/EXE10_INOT_IANNY.html" },
    { title: "Search Engine", link: "exercises/EXE11_INOT_IANNY.html" },
    { title: "My Gallery", link: "exercises/EXE12_INOT_IANNY.html" }
];




/* =====================================
   DISPLAY ACTIVITIES
===================================== */

function displayActivities() {

    const container = document.getElementById("activities-container");

    if (!container) return;

    container.innerHTML = "";

    activities.forEach(function(activity) {

        container.innerHTML += `
            <div class="portfolio-card">
                <h4>${activity.title}</h4>
                <a href="${activity.link}" target="_blank">
                    Open Activity
                </a>
            </div>
        `;

    });

}


/* =====================================
   DISPLAY EXERCISES
===================================== */

function displayExercises() {

    const container = document.getElementById("exercises-container");

    if (!container) return;

    container.innerHTML = "";

    exercises.forEach(function(exercise) {

        container.innerHTML += `
            <div class="portfolio-card">
                <h4>${exercise.title}</h4>
                <a href="${exercise.link}" target="_blank">
                    Open Exercise
                </a>
            </div>
        `;

    });

}


/* =====================================
   NAVIGATION ACTIVE EFFECT
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll(".side-nav a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.forEach(function(item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =====================================
       FEEDBACK FORM
    ===================================== */

    const feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {

        feedbackForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name.trim() || !email.trim() || !message.trim()) {
                alert("Please complete all fields.");
                return;
            }

            alert(
                "Thank you, " + name +
                "! ♡\n\n" +
                "Your feedback has been received.\n" +
                "We appreciate your visit to Yuli's Bakery Shop!"
            );

            feedbackForm.reset();

        });

    }


    /* =====================================
       SMOOTH SECTION REVEAL
    ===================================== */

    const sections = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.10
        });

        sections.forEach(function(section) {
            observer.observe(section);
        });

    } else {

        sections.forEach(function(section) {
            section.classList.add("show");
        });

    }


    /* =====================================
       HOME / BACK TO TOP
    ===================================== */

    const homeLink = document.querySelector('.side-nav a[href="#home"]');

    if (homeLink) {

        homeLink.addEventListener("click", function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================
       DISPLAY PORTFOLIO
    ===================================== */

    displayActivities();
    displayExercises();

    console.log("Yuli's Bakery Shop is ready! ♡");

});


/* =====================================
   FILE UPLOAD FUNCTION
===================================== */

function uploadFiles(inputId, listId) {

    const fileInput = document.getElementById(inputId);
    const fileList = document.getElementById(listId);

    if (!fileInput || !fileList) return;

    fileInput.addEventListener("change", function() {

        fileList.innerHTML = "";

        Array.from(this.files).forEach(function(file) {

            const item = document.createElement("p");
            item.textContent = "📄 " + file.name;

            fileList.appendChild(item);

        });

    });

}

uploadFiles("activityFile", "activityList");
uploadFiles("exerciseFile", "exerciseList");


/* =====================================
   PREVIEW FUNCTION
===================================== */

function openPreview(fileLink) {

    const modal = document.getElementById("previewModal");
    const frame = document.getElementById("previewFrame");

    if (!modal || !frame) return;

    frame.src = fileLink;
    modal.style.display = "flex";

}


/* =====================================
   CLOSE PREVIEW
===================================== */

function closePreview() {

    const modal = document.getElementById("previewModal");
    const frame = document.getElementById("previewFrame");

    if (!modal || !frame) return;

    modal.style.display = "none";
    frame.src = "";

}


/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log("Yuli's Bakery Shop is ready! ♡");
