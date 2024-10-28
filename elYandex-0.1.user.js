 ==UserScript==
 @name         elYandex
 @namespace    httptampermonkey.net
 @version      0.1
 @description  Better mini.ya.ru
 @author       ellatuk
 @match        httpsmini.ya.ru
 @grant        GM_addStyle
 @license      MIT
 ==UserScript==

(function() {
    'use strict';

     Добавление стилей для шрифтов
    GM_addStyle(`
        @import url('httpsfonts.googleapis.comcss2family=Tiny5&display=swap');
        @import url('httpsfonts.googleapis.comcss2family=Comfortaawght@300&display=swap');

        .comfortaa-unique {
            font-family 'Comfortaa', sans-serif;
            font-weight 300;
            text-align center;  Центрирование текста 
        }

        .tiny5-regular {
            font-family 'Tiny5', sans-serif;
            font-weight 400;
            text-align center;  Центрирование текста 
        }

        .logo-hidden {
            display none;
        }

         Стили для переключателя 
        .switch {
            position relative;
            display inline-block;
            width 34px;
            height 20px;
        }

        .switch input {
            opacity 0;
            width 0;
            height 0;
        }

        .slider {
            position absolute;
            cursor pointer;
            top 0;
            left 0;
            right 0;
            bottom 0;
            background-color #ccc;
            transition .4s;
            border-radius 34px;
        }

        .sliderbefore {
            position absolute;
            content ;
            height 12px;
            width 12px;
            left 4px;
            bottom 4px;
            background-color white;
            transition .4s;
            border-radius 50%;
        }

        inputchecked + .slider {
            background-color #2196F3;
        }

        inputchecked + .sliderbefore {
            transform translateX(14px);
        }
    `);

     Создаем кнопку для вызова меню настроек
    const button = document.createElement('button');
    button.textContent = 'el';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.left = '10px';
    button.style.zIndex = '1000';
    button.style.width = '40px';
    button.style.height = '40px';
    button.style.backgroundColor = '#333';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '16px';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.5)';
    document.body.appendChild(button);

     Создаем меню настроек
    const settingsMenu = document.createElement('div');
    settingsMenu.style.position = 'fixed';
    settingsMenu.style.top = '60px';
    settingsMenu.style.left = '10px';
    settingsMenu.style.width = '200px';
    settingsMenu.style.padding = '10px';
    settingsMenu.style.backgroundColor = '#111';
    settingsMenu.style.border = '3px solid #333';
    settingsMenu.style.borderRadius = '8px';
    settingsMenu.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    settingsMenu.style.display = 'none';
    settingsMenu.style.zIndex = '1000';
    document.body.appendChild(settingsMenu);

     Пункт выбора шрифта
    const fontSelect = document.createElement('select');
    const fonts = ['Обычный', 'Пиксельный', 'Простой'];
    fonts.forEach(font = {
        const option = document.createElement('option');
        option.value = font;
        option.innerText = font;
        fontSelect.appendChild(option);
    });
    settingsMenu.appendChild(fontSelect);

     Пункт выбора логотипа
    const logoSelect = document.createElement('select');
    const logos = [
        { color 'Стандартный', url '' },
        { color 'Нет логотипа', url 'none' },
        { color 'Синий', url 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_blue.svg' },
        { color 'Зеленый', url 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_green.svg' },
        { color 'Фиолетовый', url 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_purple.svg' },
        { color 'Белый', url 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_white.svg' },
        { color 'Желтый', url 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_yellow.svg' },
        { color 'Чёрно-белый', url 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_bw.svg' }
    ];
    logos.forEach(logo = {
        const option = document.createElement('option');
        option.value = logo.url;
        option.innerText = logo.color;
        logoSelect.appendChild(option);
    });
    settingsMenu.appendChild(logoSelect);

     Пункт для переключателя микрофона
    const microphoneLabel = document.createElement('label');
    microphoneLabel.innerText = 'Микрофон ';
    const microphoneSwitch = document.createElement('label');
    microphoneSwitch.classList.add('switch');

    const microphoneInput = document.createElement('input');
    microphoneInput.type = 'checkbox';
    microphoneInput.checked = true;  По умолчанию включен

    const microphoneSlider = document.createElement('span');
    microphoneSlider.classList.add('slider');

    microphoneSwitch.appendChild(microphoneInput);
    microphoneSwitch.appendChild(microphoneSlider);
    settingsMenu.appendChild(microphoneLabel);
    settingsMenu.appendChild(microphoneSwitch);

     Обработка нажатия на кнопку
    button.addEventListener('click', () = {
        settingsMenu.style.display = settingsMenu.style.display === 'none'  'block'  'none';
    });

     Функция для обновления фона и цвета текста кнопки
    function updateButtonStyles(selectedLogoUrl) {
        const buttonElement = document.querySelector('body  div.body__wrapper  div.body__content  form  div.search3__inner  button');
        if (!buttonElement) return;

        switch (selectedLogoUrl) {
            case 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_blue.svg'
                buttonElement.style.background = '#005a7d';
                buttonElement.style.color = '';  Сброс цвета текста
                break;
            case 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_green.svg'
                buttonElement.style.background = '#1e3c14';
                buttonElement.style.color = '';  Сброс цвета текста
                break;
            case 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_purple.svg'
                buttonElement.style.background = '#6446c8';
                buttonElement.style.color = '';  Сброс цвета текста
                break;
            case 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_white.svg'
                buttonElement.style.background = '#fafafa';
                buttonElement.style.color = '#333';  Изменение цвета текста
                break;
            case 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_yellow.svg'
                buttonElement.style.background = '#fad653';
                buttonElement.style.color = '';  Сброс цвета текста
                break;
            case 'httpsraw.githubusercontent.comElLatukelYandexe13c3164188b496eb3f3e6181e92bd80366094f3logotipkiYandex_logo_bw.svg'
                buttonElement.style.background = '#2d2d2d';
                buttonElement.style.color = '';  Сброс цвета текста
                break;
            case 'none'
                buttonElement.style.background = '#595959';
                buttonElement.style.color = '';  Сброс цвета текста
                break;
            case ''
            default
                buttonElement.style.background = '';  Сброс фона
                buttonElement.style.color = '';  Сброс цвета текста
                break;
        }
    }

     Обновление шрифта
    fontSelect.addEventListener('change', (event) = {
        const selectedFont = event.target.value;
        const inputContainers = document.querySelectorAll('body  div.body__wrapper  div.body__content  form  div.search3__inner  div  div.search3__input-outer-container  div');

        inputContainers.forEach(inputContainer = {
            if (selectedFont === 'Пиксельный') {
                inputContainer.classList.add('tiny5-regular');
                inputContainer.classList.remove('comfortaa-unique');
            } else if (selectedFont === 'Простой') {
                inputContainer.classList.add('comfortaa-unique');
                inputContainer.classList.remove('tiny5-regular');
            } else {
                inputContainer.classList.remove('tiny5-regular', 'comfortaa-unique');
            }
        });
    });

     Обновление логотипа
    logoSelect.addEventListener('change', (event) = {
        const selectedLogoUrl = event.target.value;
        const logoElement = document.querySelector('body  div.body__wrapper  div.body__content  form  div.search3__inner  div  div.search3__logo  div');
        if (logoElement) {
            if (selectedLogoUrl === 'none') {
                logoElement.classList.add('logo-hidden');
            } else {
                logoElement.classList.remove('logo-hidden');
                logoElement.style.backgroundImage = selectedLogoUrl  `url(${selectedLogoUrl})`  '';
                logoElement.style.backgroundSize = 'contain';
                logoElement.style.backgroundRepeat = 'no-repeat';
            }
            updateButtonStyles(selectedLogoUrl);  Обновляем фон и цвет кнопки
        } else {
            console.log('Не удалось найти элемент для изменения логотипа.');
        }
    });

     Переключение микрофона
    microphoneInput.addEventListener('change', (event) = {
        const microphoneElement = document.querySelector('body  div.body__wrapper  div.body__content  form  div.search3__inner  div  divnth-child(3)');
        if (microphoneElement) {
            microphoneElement.style.display = event.target.checked  'block'  'none';
        } else {
            console.log('Не удалось найти элемент для управления микрофоном.');
        }
    });

})();