function excuseGen() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let who1 = Math.floor(Math.random() * who.length);
    let action1 = Math.floor(Math.random() * action.length);
    let what1 = Math.floor(Math.random() * what.length);
    let when1 = Math.floor(Math.random() * when.length);

    return `${who[who1]} ${action[action1]} ${what[what1]} ${when[when1]}`;
}

window.onload = function () {

    console.log(excuseGen)
    document.querySelector("#excuse").innerHTML = excuseGen();

}

