export default function refs () {
    return {
        // Олег_______________________________________________
        loginButton: document.querySelector('.log_in__button'),
        search: document.querySelector('.search'),
        loginWindow: document.querySelector('.login__section'),
        loginClose: document.querySelector('.login__close_btn'),
        loginAcceptButton: document.querySelector('.login__accept_btn'),
        loginInput: document.querySelector('.login__input'),
        greetingText: document.querySelector('.login__greetings'),
        // Лиля_________________________________________________
        list: document.querySelector('.movies'),
        // Марина_______________________________________________
        // элементы хедера:
        headerMain: document.getElementById('headerMain'),
        headerLib: document.getElementById('headerLib'),
        btnHomeOpen: document.getElementById('btn-home-open'),
        btnLibOpen: document.getElementById('btn-lib-open'),
        // кнопки в бібліотеці:
        watchedBtn: document.getElementById('watched__btn'),
        queueBtn: document.getElementById('queue__btn')
        //(хто буде підключати, то кнопки мають стилі на активний стан, властивість current)
        
    };
};