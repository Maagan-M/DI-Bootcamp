const API_KEY = '2be8029e22428b5248a256dd';
const supportedCodesUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
const convertBtn = document.getElementById('convert');
const switchBtn = document.getElementById('switch');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const resultDiv = document.getElementById('result');

fetch(supportedCodesUrl)
    .then(response => response.json())
    .then(data => {
        const codes = data.supported_codes;
        codes.forEach(code => {
            const optionFrom = document.createElement('option');
            optionFrom.value = code[0];
            optionFrom.textContent = `${code[1]} (${code[0]})`;
            fromCurrency.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = code[0];
            optionTo.textContent = `${code[1]} (${code[0]})`;
            toCurrency.appendChild(optionTo);
        });
    })
    .catch(error => console.error('Error fetching supported currencies:', error));

convertBtn.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = amount.value;
    const convertUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amountValue}`;

    fetch(convertUrl)
        .then(response => response.json())
        .then(data => {
            const conversionRate = data.conversion_rate;
            const convertedAmount = data.conversion_result;
            resultDiv.textContent = `${amountValue} ${from} = ${convertedAmount.toFixed(2)} ${to} (Rate: ${conversionRate})`;
        })
        .catch(error => console.error('Error converting currency:', error));
});

switchBtn.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
});
