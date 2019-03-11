const cryptoAPI = new cryptoAPI();
const ui = new UI();

//Variables
const form = document.getElementById('form');


//Add event listener
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    //currency
    const currencySelect = document.getElementById('currency').value;

    //cryptocurrency
    const cryptocurrencySelect = document.getElementById('cryptocurrency').value;

    //Check for selects
    if(currencySelect === '' || cryptocurrencySelect === ''){
        //display error
        ui.printMessage('Some empty fields', 'deep-orange darken-4 card-panel')
    }else{
        cryptoAPI.queryAPI(currencySelect. cryptoCurrencySelect)
        .then(data => {
            ui.displayResult(data.result[0]);
        })
    }
})