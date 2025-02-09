document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    }

    // Typing Effect
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const texts = ["Graphic Designer", "Web Developer"];
        let index = 0;
        let charIndex = 0;
        let currentText = '';
        let isDeleting = false;

        function type() {
            if (isDeleting) {
                currentText = texts[index].substring(0, charIndex--);
            } else {
                currentText = texts[index].substring(0, charIndex++);
            }

            typingElement.textContent = currentText;

            if (!isDeleting && charIndex === texts[index].length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }

            setTimeout(type, isDeleting ? 100 : 200);
        }

        type();
    }

    // Image Modal Functionality
    const img = document.getElementById('thumbnail');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('fullImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    if (img && modal && modalImg && closeBtn) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src; // Set the modal image to the clicked image
        });

        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Rolling Coin Animation
    const coin = document.querySelector("");
    if (coin) {
        function rollCoin() {
            coin.style.animation = "roll 2s linear infinite, move 3s linear infinite";
        }

        coin.addEventListener("click", function () {
            if (coin.style.animation.includes("none")) {
                rollCoin();
            } else {
                coin.style.animation = "none";
            }
        });

        rollCoin();
    }
});
