let appView = document.getElementById('app');

view();
function view() {
    let html = /*HTML*/`<h1>A very bad encryption program</h1>`;

    html +=/*HTML*/ `
    <p>Write what you want encrypted here: <input onchange = "plainText.push(this.value)"/></p>
    <p> Write a key here (integer ONLY!): <input onchange = "key = this.value"/></p>
    <button conclick = "encrypt()">Encrypt!</button>
    <p>${encryptedText}</p>
    `;

    appView.innerHTML = html;
}
