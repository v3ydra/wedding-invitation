/* =========================================================
   ELEMENTS
========================================================= */

const opening = document.getElementById("opening");
const waxSeal = document.getElementById("waxSeal");
const invitation = document.getElementById("mainInvitation");
const rsvpButton = document.getElementById("rsvpButton");

let invitationOpened = false;


/* =========================================================
   LOCK PAGE SCROLL WHILE ENVELOPE IS CLOSED
========================================================= */

document.body.style.overflow = "hidden";


/* =========================================================
   OPEN INVITATION
========================================================= */

waxSeal.addEventListener("click", () => {

    if (invitationOpened) return;

    invitationOpened = true;

    // Gold light + seal
    opening.classList.add("opening-light");
    opening.classList.add("seal-activated");

    // Open envelope almost immediately
    setTimeout(() => {
        opening.classList.add("envelope-opening");
    }, 180);

    // Card rises quickly
    setTimeout(() => {
        opening.classList.add("card-rising");
    }, 300);

    // Invitation appears
    setTimeout(() => {
        invitation.classList.add("visible");
    }, 650);

    // Remove opening screen
    setTimeout(() => {
        opening.classList.add("hidden");

        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";

    }, 1000);

});


/* =========================================================
   SCROLL REVEALS
========================================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .intro, .event-card, .journey, .couple-frame, .rsvp-card"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("in-view");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   BLIND EVENT CARDS
========================================================= */

const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("revealed");

    });

});


/* =========================================================
   RSVP
========================================================= */

if (rsvpButton) {

    rsvpButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert("RSVP will be connected here next 🤍");

    });

}