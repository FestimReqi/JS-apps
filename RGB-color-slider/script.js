function colors() {
    let red = document.querySelector('#red').value;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;
    document.body.style.backgroundColor = `
        rgb(${red}, ${green}, ${blue})
    `;

    let output = document.querySelector('#output');
    output.innerHTML = `
        rgb(${red}, ${green}, ${blue})
    `;
    output.style.backgroundColor = `
        rgb(${red}, ${green}, ${blue})
    `;
}