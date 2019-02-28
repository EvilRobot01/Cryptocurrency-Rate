class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCryptoCurrencies();
    }

    //Print <option>
    printCryptoCurrencies(){
        cryptoAPI.getCrytoCurrenciesList()
        .then(data => {
            const cryptoCurrencies = data.cryptoCurrencies;

            const select = document.getElementById('cryptocurency');

            cryptoCurrencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency.id;
                option.appendChild(document.createTextNode(currency.name));
                select.appendChild(option);
                
            });
        })
    }
}