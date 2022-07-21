
let cookie_count_1 = Cookies.get(`click_count`);
// let body_page = document.querySelector(`body`);
document.body.insertAdjacentHTML(`afterbegin`, `<h1> ${cookie_count_1} number of clicks so far</h1> `);