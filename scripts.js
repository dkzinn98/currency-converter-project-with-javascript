const convertButton = document.querySelector("#convert-button")
const currencyFromSelect = document.querySelector(".currency-from-select")
const currencySelect = document.querySelector(".currency-select")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 

function convertValues(){ // Criando uma função para conversão de valores de uma moeda para outra (matemática básica) = pega o valor de uma (ex:10) e divide pelo valor da outra (ex:2)
    const inputCurrencyValue = document.querySelector(".input-currency").value  // aqui eu criei uma variável que puxa apenas o valor de um input do html
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // real br
    const currencyValueConverted = document.getElementById("dolar-value-text") // outras moedas
    const realValueText = document.getElementById("real-value-text");

    const dolarToday = 6.2
    const euroToday = 6.9
    const libraToday = 7.1
    const bitcoinToday = 134000.00

    // // aqui abaixo estarão as moedas a serem convertidos (parte de cima no site)
    //     realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    //     { style: 'currency', currency: 'BRL' }
    // ).format(inputCurrencyValue)

    
    // 1° - REAL | DOLAR 

    if (currencyFromSelect.value === "real" && currencySelect.value === "dolar") { 
                realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

        if (currencyFromSelect.value === "dolar" && currencySelect.value === "real") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    // 2° - REAL | EURO

        if (currencyFromSelect.value === "real" && currencySelect.value === "euro") { 
                realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

        if (currencyFromSelect.value === "euro" && currencySelect.value === "real") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    // 3° - REAL | LIBRA

        if (currencyFromSelect.value === "real" && currencySelect.value === "libra") { 
                realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

        if (currencyFromSelect.value === "libra" && currencySelect.value === "real") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-GB',
        { style: 'currency', currency: 'GBP' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }


    // 4° - REAL | BITCOINN //

    if (currencyFromSelect.value === "real" && currencySelect.value === "bitcoin") { 
                realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }
        if (currencyFromSelect.value === "bitcoin" && currencySelect.value === "real") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'BTC' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    // 5° - DOLAR | EURO

        if (currencyFromSelect.value === "dolar" && currencySelect.value === "euro") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

        if (currencyFromSelect.value === "euro" && currencySelect.value === "dolar") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday)
    }

    // 6° - DOLAR | LIBRA

        if (currencyFromSelect.value === "dolar" && currencySelect.value === "libra") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

        if (currencyFromSelect.value === "libra" && currencySelect.value === "dolar") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-GB',
        { style: 'currency', currency: 'GBP' } 
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday)
    }


    // 7° - DOLAR | BITCOIN
    
        if (currencyFromSelect.value === "dolar" && currencySelect.value === "bitcoin") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

        if (currencyFromSelect.value === "bitcoin" && currencySelect.value === "dolar") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'BTC' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    
    // 8° - EURO | LIBRA 

    
        if (currencyFromSelect.value === "euro" && currencySelect.value === "libra") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

        if (currencyFromSelect.value === "libra" && currencySelect.value === "euro") { 
                realValueText.innerHTML = new Intl.NumberFormat('en-GB',
        { style: 'currency', currency: 'GBP' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday)
    }


    // 9° - EURO | BITCOIN

    
        if (currencyFromSelect.value === "euro" && currencySelect.value === "bitcoin") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

        if (currencyFromSelect.value === "bitcoin" && currencySelect.value === "euro") { 
                realValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'BTC' }
    ).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * bitcoinToday)
    }

}

    
// aqui abaixo é a troca de texto e imagem da parte de cima de acordo c sua moeda

function changeCurrency(){
    const currencyFromName = document.getElementById("currency-from-name")
    const currencyFromImage = document.querySelector(".currency-img")
    const currencyName = document.getElementById(".currency-name")
    const currencyImage = document.querySelector(".currency-to-img") 

    if (currencyFromSelect.value == "real") {

        currencyFromName.innerHTML = "Real"
        currencyFromImage.src = "./assets/brasil2.png"
    }
    
    if (currencyFromSelect.value == "dolar") {
       
        currencyFromName.innerHTML = "Dólar Americano"
        currencyFromImage.src = "./assets/usa.png"
    }

    if (currencyFromSelect.value == "euro") {
        currencyFromName.innerHTML = "Euro"
        currencyFromImage.src = "./assets/euro.png"
    }

    if (currencyFromSelect.value == "libra") {
        currencyFromName.innerHTML = "Libra Esterlina"
        currencyFromImage.src = "./assets/libra.png"
    }
    
    if (currencyFromSelect.value == "bitcoin") {
        currencyFromName.innerHTML = "Bitcoin"
        currencyFromImage.src = "./assets/bitcoin.png"
    }
    
   convertValues() 
}

function currencySelect2() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-to-img") 
     // agora a parte de baixo
    
    if (currencySelect.value == "real") { 
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/Brasil2.png" 
    }    

    if (currencySelect.value == "dolar") { 
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa.png" 
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png" 
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    
    convertValues() // troca o valor da divisão da moeda sem eu precisar clicar em converter novamente
}


currencyFromSelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change",currencySelect2)
convertButton.addEventListener("click", convertValues)

