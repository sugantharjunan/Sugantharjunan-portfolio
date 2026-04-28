/* Reveal Animation */
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if (top < visible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* Back To Top Button */
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* Typing Effect */
const subtitle = document.querySelector(".hero p");

if (subtitle) {
    const text = subtitle.innerText;
    subtitle.innerText = "";

    let i = 0;

    function typeText() {
        if (i < text.length) {
            subtitle.innerText += text.charAt(i);
            i++;
            setTimeout(typeText, 60);
        }
    }

    typeText();
}
