const {body} = document;

function changeBackground(number) {
    if(!(body.className === `background-${number}`)) {
body.className =`background-${number}`;}}
