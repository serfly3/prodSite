console.log('спасибо большое амиру за то что учит меня <3<3<3');

const bbt1 = document.getElementById("day1");
const bbt2 = document.getElementById("day2");
const bbt3 = document.getElementById("day3");
const bbt4 = document.getElementById("day4");
const bbt5 = document.getElementById("day5");
const bbt6 = document.getElementById("day6");
const bbt7 = document.getElementById("day7");

//завтрак
const bFast = document.getElementById("breakfast");
//обед
const lunch = document.getElementById("lunch");
//ужин
const dinner = document.getElementById("dinner")
//перекус
const snk = document.getElementById("snack");

//номер дня
const dayN = document.getElementById("dayN");

function day1() {
    dayN.textContent = "День 1"
    
    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Бутерброд с огурцом, яйцом и сыром</li>
    <li>Зелёный чай</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Куриный суп <a href="https://youtu.be/ZjLmEX6_k_o">рецепт</a></li>
    <li>Рулетик из лаваша <a href="https://youtu.be/sGgzXMm0OsA">рецепт</a></li>
    <li>Чёрный чай с сухофруктами</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Натуральный йогурт</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Овощное рагу <a href="https://youtu.be/RKszagQVlQ0">рецепт</a></li>
    <li>Чёрный чай с рулетиком из лаваша</li>
    </p>
    `
}

function day2() {
    dayN.textContent = "День 2"

    
    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Овсяная каша с курагой, кусочек хлеба <a href="https://youtu.be/LbqJUFQgihk">рецепт</a>
    <li>Какао</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Гречневый суп, кусочек хлеба  <a href="https://youtu.be/NSQhe5bcqV8">рецепт</a></li>
    <li>2 куриных котлеты, 4 ломтика огурца и помидора <a href="https://youtu.be/egbmhI3PSxc">рецепт</a></li>
    <li>Зелёный чай</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Груша</li>
    <li>Асорти из орешков</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Салат "Венеция"  <a href="https://youtu.be/E3Q9x8ES8Jg">рецепт</a></li>
    <li>Зелёный чай с 2 дольками горького шоколада</li>
    </p>
    `
}

function day3() {
    dayN.textContent = "День 3"
    
    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Овсяноблин с шоколадно- банановой начинкой  <a href="https://youtu.be/v9H4Q3GPBm8">рецепт</a>
    <li>Черный чай с лимоном</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Борщ, кусочек хлеба  <a href="https://youtu.be/TRm4THKtexI">рецепт</a></li>
    <li>Запеканка капустная</li>
    <li>Зелёный чай</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Яблоко</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Спагетти с кальмарами <a href="https://youtu.be/I1k1hptK3ow">рецепт</a></li>
    <li>Чёрный чай с сухофруктами</li>
    </p>
    `
}

function day4() {
    dayN.textContent = "День 4"

    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Рисовая каша, кусочек хлеба</li>
    <li>Черный чай с лимоном</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Щи, кусочек хлеба  <a href="https://youtu.be/eW1PJvqRhNo">рецепт</a></li>
    <li>Салат с креветками <a href="https://youtu.be/k-pVAWPLIYk">рецепт</a></li>
    <li>Зелёный чай, овсяное печенье</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Натуральный йогурт, груша</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Салат с креветками</li>
    <li>Чёрный чай с лимоном и мёдом + бутерброд со сливочным маслом</li>
    </p>
    `
}

function day5() {
    dayN.textContent = "День 5"

    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Оладушки с джемом , 4 шт <a href="https://youtu.be/NPGLYAgYhNQ">рецепт</a></li>
    <li>Кофе с молоком</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Щи, кусочек хлеба <a href="https://youtu.be/eW1PJvqRhNo">рецепт</a></li>
    <li>Лазанья <a href="https://youtu.be/AoEAvOR0FfA">рецепт</a></li>
    <li>Зелёный чай</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Зелёный чай, овсяное печенье 2шт</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Салат огурец, помидор. Заправка - нерафинированое масло</li>
    <li>Творожная запеканка <a href="https://youtu.be/0cxh8wSr9bY">рецепт 2</a></li>
    <li>Чёрный чай с лимоном и мёдом</li>
    </p>
    `
}

function day6() {
    dayN.textContent = "День 6"

    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Вареники  <a href="https://youtu.be/6MzqQOeNYP4">рецепт</a></li>
    <li>Чёрный чай с лимоном</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Овощной суп- пюре, кусочек хлеба <a href="https://youtu.be/Ja_1WrA4faA">рецепт</a></li>
    <li>Фунчоза  <a href="https://youtu.be/ukX84qnnyg4">рецепт</a></li>
    <li>Чёрный чай с лимоном</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Банан</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Фунчоза</li>
    <li>Чёрный чай с лимоном и мёдом</li>
    </p>
    `
}

function day7() {
    dayN.textContent = "День 7"

    bFast.innerHTML = `
    <h1>Завтрак</h1>
    <p>
    <li>Стакан воды за 30 мин до еды</li>
    <li>Овсянка парфе, кусочек хлеба  <a href="https://youtu.be/Hhwtl4fsNLA">рецепт</a></li>
    <li>Чёрный чай с лимоном</li>
    </p>
    `

    lunch.innerHTML = `
    <h1>Обед</h1>
    <p>
    <li>Рассольник, кусочек хлеба  <a href="https://youtu.be/sy_-NgPyCbY">рецепт</a></li>
    <li>Фунчоза  <a href="https://youtu.be/ukX84qnnyg4">рецепт</a></li>
    <li>Зелёный чай с 2 дольками горького шоколада</li>
    </p>
    `

    snk.innerHTML = `
    <h1>Полдник</h1>
    <p>
    <li>Яблоко, асорти из орешков</li>
    <li>Вода в течении дня</li>
    </p>
    `

    dinner.innerHTML = `
    <h1>Ужин</h1>
    <p>
    <li>Запеканка с зелёной стручковой фасолью <a href="https://youtu.be/yoomVyZDKRs">рецепт</a></li>
    <li>Куриное филе <a href="https://youtu.be/BYLh2wBk8Ws">рецепт</a></li>
    <li>Чёрный чай с молоком</li>
    </p>
    `
}

//чтение кнопок
bbt1.addEventListener('click', day1);
bbt2.addEventListener('click', day2);
bbt3.addEventListener('click', day3);
bbt4.addEventListener('click', day4);
bbt5.addEventListener('click', day5);
bbt6.addEventListener('click', day6);
bbt7.addEventListener('click', day7);

day1();