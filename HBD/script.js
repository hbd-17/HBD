const openLetter = document.getElementById("openLetter");

const closeMessage = document.getElementById("closeMessage");

const messageOverlay = document.getElementById("messageOverlay");

const pageOne = document.getElementById("pageOne");

const pageTwo = document.getElementById("pageTwo");

const prevPage = document.getElementById("prevPage");

const nextPage = document.getElementById("nextPage");

const pageNumber = document.getElementById("pageNumber");

const openPhoto = document.getElementById("openPhoto");

const closePhoto = document.getElementById("closePhoto");

const fullscreenPhoto = document.getElementById("fullscreenPhoto");


let currentPage = 1;


/* ==================================================
   تحديث الصفحة الحالية
================================================== */

function updatePage() {

    if (currentPage === 1) {

        pageOne.classList.add("active");

        pageTwo.classList.remove("active");

        pageNumber.textContent = "1 / 2";

        prevPage.disabled = true;

        nextPage.disabled = false;

    } else {

        pageOne.classList.remove("active");

        pageTwo.classList.add("active");

        pageNumber.textContent = "2 / 2";

        prevPage.disabled = false;

        nextPage.disabled = true;

    }

}


/* ==================================================
   فتح الرسالة
================================================== */

openLetter.addEventListener("click", () => {

    currentPage = 1;

    updatePage();

    messageOverlay.classList.add("show");

    messageOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

});


/* ==================================================
   الصفحة التالية
================================================== */

nextPage.addEventListener("click", () => {

    if (currentPage < 2) {

        currentPage++;

        updatePage();

    }

});


/* ==================================================
   الصفحة السابقة
================================================== */

prevPage.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        updatePage();

    }

});


/* ==================================================
   إغلاق الرسالة
================================================== */

closeMessage.addEventListener("click", () => {

    messageOverlay.classList.remove("show");

    messageOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

});


/* ==================================================
   إغلاق الرسالة عند الضغط خارج البطاقة
================================================== */

messageOverlay.addEventListener("click", (event) => {

    if (event.target === messageOverlay) {

        messageOverlay.classList.remove("show");

        messageOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


/* ==================================================
   فتح الصورة بكامل الشاشة
================================================== */

openPhoto.addEventListener("click", () => {

    fullscreenPhoto.classList.add("show");

    fullscreenPhoto.setAttribute(
        "aria-hidden",
        "false"
    );

});


/* ==================================================
   إغلاق الصورة
================================================== */

function closeFullscreenPhoto() {

    fullscreenPhoto.classList.remove("show");

    fullscreenPhoto.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* زر X */

closePhoto.addEventListener(
    "click",
    closeFullscreenPhoto
);


/* الضغط خارج الصورة */

fullscreenPhoto.addEventListener("click", (event) => {

    if (event.target === fullscreenPhoto) {

        closeFullscreenPhoto();

    }

});


/* ==================================================
   زر Escape
================================================== */

document.addEventListener("keydown", (event) => {

    /* إغلاق الصورة أولًا إذا كانت مفتوحة */

    if (
        event.key === "Escape" &&
        fullscreenPhoto.classList.contains("show")
    ) {

        closeFullscreenPhoto();

        return;

    }


    /* إغلاق الرسالة */

    if (
        event.key === "Escape" &&
        messageOverlay.classList.contains("show")
    ) {

        messageOverlay.classList.remove("show");

        messageOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


/* ==================================================
   الحالة الابتدائية
================================================== */

updatePage();