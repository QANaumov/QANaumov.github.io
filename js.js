/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {alert('Жду в гости'), alert(emoji = String.fromCodePoint(0x1F970, 0x1F970, 0x1F970))})