const myForm = document.getElementById('myForm');
const outputSection = document.getElementById('outputSection');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    const jsonData = JSON.stringify(formDataObj, null, 2);

    const jsonElement = document.createElement('pre');
    jsonElement.textContent = jsonData;
    outputSection.innerHTML = '';
    outputSection.appendChild(jsonElement);
});
