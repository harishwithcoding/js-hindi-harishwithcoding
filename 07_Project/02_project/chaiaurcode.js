const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter a valid Height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Shown the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      tell.innerHTML = `<p>Less than 18.6</p>`;
    }
    if (24.9 > bmi < 18.6) {
      tell.innerHTML = `<p>18.6 and 24.9</p>`;
    }
    if (bmi > 24.9) {
      tell.innerHTML = `<p>Greater than 24.9</p>`;
    }
  }
});
