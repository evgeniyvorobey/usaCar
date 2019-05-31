function Element(selector) {
    return document.querySelector(selector)
}

//---------CURRENCY PRIVATBANK---------//
var currencyExchange = [];

fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => {

        response.json().then(function(data) {
            data.map( item => {
                currencyExchange.push(item)
            })
        });
    })

//-----END----CURRENCY PRIVATBANK---------//


//---------TO NUMBER---------//
function number(el) {
    return parseFloat(el)
}
//----END-----TO NUMBER---------//


//-------CHECK INPUT-----//
function isEmpty(el) {
    var val = el.value;
    if (val === '000') {
        el.classList.add('not-complete')
        el.style.border = '1px solid rgba(238,0,20,.76)';
    } else {
        el.classList.remove('not-complete')
        el.style.border = '';
        return val;
    }
}

//-------AUCTION FEE---------//
var auction_fee = [];
fetch('../../json/auctionFee.json')
    .then(response => {
        response.json().then(function(data) {
            data.map(function(item) {
                auction_fee.push(item)
            })
        });
    })


//---------SELECT TYPE OF  VEHICLE--------//
Element('.top-toggle-container').querySelectorAll('.toggle-item').forEach(item => {
    item.addEventListener('click', function() {
        Element('.top-toggle-container').querySelectorAll('.toggle-item').forEach(item => {
            item.classList.remove('active')
        })
        this.classList.add('active');
        var value = this.getAttribute('data-value');
        selectedItemType = value;
        if(value === 'electric') {
            if (!Element('.electricVehicle')){
                Element('#fuel').setAttribute('disabled', true);
                Element('#fuel').innerHTML += `<option class="electricVehicle" selected value=0>Электро</option>`;
                Element('#engineСapacity').value = '0.0';
                Element('#engineСapacity').setAttribute('disabled', true);

            }
        } else {
            if (Element('.electricVehicle')){
                Element('#fuel').removeAttribute('disabled');
                Element('#engineСapacity').removeAttribute('disabled');
                Element('#engineСapacity').value = '';

                Element('.electricVehicle').remove();
            }
        }
    })
})

var destination = [];
var state;
var auction;
var citySelect = document.querySelector('#delivery-from-city');
var date = new Date;
var selectedItemType = 'car';
var auctionFee;

function usdToEur( money, usd, eur ) {
    return money * usd / eur;
}

function checkEl(el, min, max) {
    if (el.value.length > min && el.value.length < max ){
        el.classList.remove('not-complete');
        el.style.border = '1px solid transparent';
        return number(el.value)
    } else {
        el.classList.add('not-complete')
        el.style.border = '1px solid rgba(238,0,20,.76)';
    }
}

//----FORM-----//
document.querySelector('.count').addEventListener('click', function (e) {
        var city = this.parentNode.querySelector('#delivery-from-city');

        isEmpty(city);

        var yearVal = checkEl(document.querySelector('#year'), 3, 5);
        var age = (date.getFullYear() + 1) - yearVal;
        var engineСapacityVal = checkEl(document.querySelector('#engineСapacity'), 2, 5);
        var priceVal = checkEl(document.querySelector('#price'), 3, 9);
        var fuelValue = parseInt(isEmpty(document.querySelector('#fuel')));



        if(!Element('.wrapper-for-calculator').querySelector('.not-complete')){
            
            var companyTax = 700;
            var deliveryFromUSA = 1000;
            var preparation_of_documents = 1000;
            var ukraineDelivery = 300;
            var auctionFromFee;
            var yearVal = checkEl(document.querySelector('#year'), 3, 5);
            var age = (date.getFullYear() + 1) - yearVal;
            var engineСapacityVal = checkEl(document.querySelector('#engineСapacity'), 2, 5);
            var priceVal = parseInt(checkEl(document.querySelector('#price'), 3, 9));
            var fuelValue = parseInt(isEmpty(document.querySelector('#fuel')));

            var excisePrice = parseInt(fuelValue * age * engineСapacityVal);
            document.querySelector('.excise').innerHTML = `${excisePrice} `

            var fee = parseInt(priceVal / 10);
            document.querySelector('.fee').innerHTML = `${fee}  `;

            var nds = parseInt((priceVal + fee + excisePrice) * 0.2);
            document.querySelector('.nds').innerHTML = `${nds}  `;


            auction_fee.map(price => {
                if (priceVal >= parseFloat(price.min) && priceVal <= parseFloat(price.max) ){
                    auctionFromFee = price.fee;
                }
            })

            Element('.car_price').innerHTML = `${priceVal} $`;
            Element('.auction_fee').innerHTML = `${auctionFromFee} $`
            Element('.duty').innerHTML = `${fee} $`;
            Element('.fee').innerHTML = `${nds} $`;
            Element('.land_delivery').innerHTML = `${destination[city.value][state]} $`;
            Element('.total').innerHTML = `${priceVal + auctionFromFee + fee + nds + parseInt(destination[city.value][state]) + 
                companyTax + deliveryFromUSA + preparation_of_documents + ukraineDelivery}`;


            Element('.invoice').classList.add('active');

        }
    })


document.querySelectorAll('.agree').forEach(item => {
    item.addEventListener('click', function () {
        this.parentNode.parentNode.classList.remove('active');
    })
})