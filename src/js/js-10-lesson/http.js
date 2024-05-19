//  Web Serwer - динамічно генерує html на сервері
// API Server - просто віддає данні в форматі JSON, а вже клієнт (браузер) відмальовує сторінку..
// Основні HTTP ьетоди
// GET - отримати данні;
// POST - відправити данні, і створити нові;
// PUT and PATCH - відправити данні, і обновити існуючі;
// DELETE - видалити існуючі данні

// HTTP Status Codes Glossary
// httpstatuses.com
// https://httpstatuses.com

const r = fetch('https://pokeapi.co/api/v2/pokemon/{2}');

console.log(r);
