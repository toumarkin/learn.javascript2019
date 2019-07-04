let addText = function(text) {
    let heading = document.getElementById('heading');
    let simpleText = document.createTextNode(text);
    heading.appendChild(simpleText);
}
addText ('Text here');
