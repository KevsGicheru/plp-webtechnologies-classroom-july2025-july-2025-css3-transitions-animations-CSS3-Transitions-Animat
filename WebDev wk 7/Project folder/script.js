️⃣ script.js – functions, scope, parameters & animation triggers
/* -------------------------------------------------
   GLOBAL SCOPE -------------------------------------------------
   These variables are accessible from any function in this file.
   ------------------------------------------------- */
let moveCount = 0;               // tracks how many times the box moved

/* -------------------------------------------------
   REUSABLE FUNCTION: moveBox
   Parameters: element (DOM node), distance (px)
   Returns: new X‑position (number)
   ------------------------------------------------- */
function moveBox(element, distance) {
    // local variable – does NOT affect global scope
    const currentX = moveCount * distance;
    element.style.transform = `translateX(${currentX}px)`;
    moveCount++;                     // modify global variable
    return currentX;
}

/* -------------------------------------------------
   REUSABLE FUNCTION: toggleClass
   Parameters: element, className (string)
   Returns: boolean (true if class was added)
   ------------------------------------------------- */
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
        return false;
    } else {
        element.classList.add(className);
        return true;
    }
}

/* -------------------------------------------------
   EVENT LISTENERS -------------------------------------------------
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // ---- Box animation (JS‑triggered) ----
    const box = document.getElementById('box');
    const moveBtn = document.getElementById('moveBtn');
    moveBtn.addEventListener('click', () => {
        const newPos = moveBox(box, 80);   // 80 px each click
        console.log(`Box moved to ${newPos}px`);
    });

    // ---- Card flip (click) ----
    const flipCard = document.getElementById('flipCard');
    flipCard.addEventListener('click', () => {
        toggleClass(flipCard, 'flipped');
    });

    // ---- Loading spinner ----
    const loader = document.getElementById('loader');
    document.getElementById('loadStart').addEventListener('click', () => {
        loader.classList.remove('hidden');
    });
    document.getElementById('loadStop').addEventListener('click', () => {
        loader.classList.add('hidden');
    });

    // ---- Modal popup ----
    const modal = document.getElementById('modal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');

    openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

    // clicking outside the modal content also closes it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
});