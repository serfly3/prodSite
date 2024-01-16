const bttFs = document.getElementById("fS");
const bttYazio = document.getElementById("Yazio");
const info = document.getElementById("info");

function FatSecret() {
    info.innerHTML = `
    <img src="photo/Fs.jpg" alt="FatSecret logo">
    <h1>FatSecret</h1>
    <p>
    Счетчик Калорий от FatSecret является неотъемлемым приложением, чтобы просто найти информацию о питательной ценности пищевых продуктов, которые Вы едите, а также легко отслеживать ваши блюда, физические упражнения и вес. FatSecret бесплатно.
    </p>
    <p>
    Можно скачать в <a href="https://apps.apple.com/ru/app/%D1%81%D1%87%D0%B5%D1%82%D1%87%D0%B8%D0%BA-%D0%BA%D0%B0%D0%BB%D0%BE%D1%80%D0%B8%D0%B9-%D0%BE%D1%82-fatsecret/id347184248">AppStore</a> и <a href="https://play.google.com/store/apps/details?id=com.fatsecret.android&hl=ru">GooglePlay</a>
    </p>

    `
}

function Yazio() {
    info.innerHTML = `
    <img src="photo/Yazio.jpeg"  alt="FatSecret logo">
    <h1>Yazio</h1>
    <p>
    Счетчик калорий и дневник питания от YAZIO. С помощью бесплатного приложения Счетчик калорий от YAZIO вы можете вести дневник питания, отслеживать физическую активность и успешно снижать вес. Теперь считать калории и терять лишние килограммы очень легко!
    </p>
    <p>
    Можно скачать в <a href="https://apps.apple.com/ru/app/yazio-%D1%81%D1%87%D0%B5%D1%82%D1%87%D0%B8%D0%BA-%D0%BA%D0%B0%D0%BB%D0%BE%D1%80%D0%B8%D0%B9-%D0%B8-%D0%B4%D0%B8%D0%B5%D1%82%D0%B0/id946099227">AppStore</a> и <a href="https://play.google.com/store/apps/details?id=com.yazio.android&hl=ru">GooglePlay</a>
    </p>

    `
}

bttFs.addEventListener('click', FatSecret);
bttYazio.addEventListener('click', Yazio);