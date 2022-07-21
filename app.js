if (Cookies.get(`click_count`)=== undefined || ``){
Cookies.set(`click_count`, 0);
}
let click_me_event = document.querySelector(`#click_1`);
click_me_event.addEventListener(`click`, click_me_event_count);
function click_me_event_count() {
    Cookies.get(`click_count`);
    // Cookies.set(`click_count`, +1);


     let true_count = Number(Cookies.get(`click_count`)) + 1;
    console.log(true_count);
    Cookies.set(`click_count`, true_count);
    
}

let to_display_page = document.getElementById(`to_display`);
to_display_page.addEventListener(`click`, display_page);
function display_page () {
    location.href = "display.html"
}