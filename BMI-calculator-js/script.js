function calculate() {
    let bmi;
    let result = document.querySelector('#result');

    let weight = parseInt(document.querySelector('#weight').value);
    let height = parseInt(document.querySelector('#height').value);

    document.querySelector('#weight-val').textContent = weight + " kg";
    document.querySelector('#height-val').textContent = height + " cm";

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.textContent = bmi;

    if (bmi < 18.5) {
        category = "Underweight";
        result.style.color = "#269bc5";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        category = "Normal Weight";
        result.style.color = "#0dbe00";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        result.style.color = "#ff007e";
    } else {
        category = "Obese";
        result.style.color = "#ec1818";
    }
    document.querySelector('#category').textContent = category;

}