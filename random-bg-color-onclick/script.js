function changeBG () {
    const change = document.querySelector('button');
    change.addEventListener('click', () => {
        document.body.style.background = `
        rgb( ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})
        `
    });
}

changeBG();