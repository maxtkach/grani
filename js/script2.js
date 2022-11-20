(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();

const reviews = [
    {
        id: 1,
        name: "@darryncodes",
        job: "Кусачки",
        text:
            '"Мої кусачки почали працювати самостійно! У майстера золоті руки, буду ходити кожні дві неділі!!!"'
    },
    {
        id: 2,
        name: "@annajohnson",
        job: "Пушер",
        text:
            '"Я і сама не знаю що таке пушер але він дуже класно працює після заточки"'
    },
    {
        id: 3,
        name: "@peterjones",
        job: "Побутові ножиці",
        text:
            '"Ціни настільки низькі, що я буду точити ножиці буквально кожен раз коли щось поріжу"'
    },
    {
        id: 4,
        name: "@billanderson",
        job: "Деталі до м'ясорубки",
        text:
            '"Моя мясорубка так гарно працює, що мій син більше не скаржиться на хрящі у мясі"'
    }
];

const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    testimonial.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});