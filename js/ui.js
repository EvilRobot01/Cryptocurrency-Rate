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

    //Print messages
    printMessage(message, className){
        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.messages');

        messageDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('.message div').remove();
        }, 3000);

    }

    displayResults(result){
        let  currencyName;

        currencyName = 'price_' + currency.toLowerCase();
        const value = result[currencyName];

        let  HTMLtemplate = '';

        HTMLtemplate += `
            <div class="card-content white-text">
                <div class="card-content white-text">
                    <span class="card-tittle">Result</span>
                    <p>The Price of ${result.name} from ${currency} is ${value}</p>
                </div>
            </div>
        `;
        
        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLtemplate;
    }
}