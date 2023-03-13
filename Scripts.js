var Display = [];
var theme = 1;

charClick = (clickedId) => {
    Display.push(clickedId);
    document.getElementById('displaytext').innerHTML = Display.join('');
    return Display;
}

sum = () => {
    phrase = Display.join('');
    document.getElementById('displaytext').innerHTML = eval(phrase).toFixed(3);
    Display.length = 0;
}

del = () => {
    Display.pop();
    Display.length > 0 ? document.getElementById('displaytext').innerHTML = Display.join('') : document.getElementById('displaytext').innerHTML = 0;
}

reset = () => {
    Display.length = 0;
    document.getElementById('displaytext').innerHTML = 0;
    document.getElementById("displaytext").style.fontSize = '100%';
}

themeSwitch = () => {
    var theme = document.getElementById('Theme').value;
    document.getElementById("stylesheet").setAttribute("href", `./styles${theme}.css`);  
}

screenOverFlow = (a) => {
    document.getElementById("displaytext").style.fontSize = `${a}%`;
}

updateVariables = () => {
    let displayLength = document.getElementById("displaytext").innerHTML.length;

    for (let i = 1; i < displayLength; i++) {
        if (displayLength > i*4) {
            screenOverFlow(50/(i/1.2));
        }
        else if (displayLength < 4) {
            document.getElementById("displaytext").style.fontSize = '100%';
        }


    }
}


for i in range(len(ditionary)):
    if str(i) in dictionary:
        df.loc[df['uid'] == i, "newcolumn"] = dictionary[str(i)]
    else:
        pass