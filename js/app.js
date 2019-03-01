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
        
    }else{
        
    }
})