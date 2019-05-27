function Element(selector) {
    return document.querySelector(selector)
}


var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

//---------TOP MENU WHEN SCROLL--------------//
document.addEventListener('scroll', function () {
    var vievportHeight = window.innerHeight;

    if (window.scrollY > 110) {
        document.querySelector('header').classList.add('fix-header');
        document.querySelector('main').classList.add('when-header-fixed');
    } else {
        document.querySelector('header').classList.remove('fix-header');
        document.querySelector('main').classList.remove('when-header-fixed');
    }

    if(document.querySelector('.to-top-button')) {
        var el = document.querySelector('.to-top-button').getBoundingClientRect();
        if (window.scrollY > vievportHeight ) {
            document.querySelector('.to-top-button').classList.add('active')
        }else{
            document.querySelector('.to-top-button').classList.remove('active')
        }
    }

    if(document.querySelector('.our-services-item')){
        document.querySelectorAll('.our-services-item').forEach(item => {
            var el = item.getBoundingClientRect();
            if (el.top <= (vievportHeight - 50) ) {
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
    }
})
//-----END----TOP MENU WHEN SCROLL--------------//




//---------close hamburger menu and fogging of when click on mrnu button--------//

document.querySelectorAll('.header-list-link').forEach((item) => {
    item.addEventListener('click', () => {
            foggingOff();
            document.querySelector('.navigation-panel').classList.remove('active');
    })
})

//------------- ON/OFF fogging--------------//

foggingOn = () => document.querySelector('.fogging').classList.add('active');
foggingOff = () => document.querySelector('.fogging').classList.remove('active');

//-------------- close header menu --------//


Element('.fogging').addEventListener('click', function () {
    foggingOff();
    Element('.navigation-panel').classList.remove('active');
    Element('.delivery-container').classList.remove('_active')

})

document.querySelector('.hamburger').addEventListener('click', function () {
    this.parentNode.classList.toggle('active');
    foggingOn();
})


//-------question/answer - block ----------//
if( document.querySelector('.wy-by-in-usa-item')){
    document.querySelectorAll('.wy-by-in-usa-item span').forEach(item => {
        item.addEventListener('click', function () {
            if(this.parentNode.classList.contains('active')){
                this.parentNode.classList.remove('active')
            } else{
                document.querySelectorAll('.wy-by-in-usa-item span').forEach(item => {
                    item.parentNode.classList.remove('active')
                })
                this.parentNode.classList.add('active')
            }
        })
    })
}

document.querySelectorAll('.questions').forEach(item => {
    item.addEventListener('click', function() {
        if (this.parentNode.classList.contains('active')) {
            this.parentNode.classList.remove('active')
        } else {
            document.querySelectorAll('.questions').forEach(item => {
                item.parentNode.classList.remove('active');
            })
            this.parentNode.classList.toggle('active');
        }
    })
})


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


//---------CURRENCY PRIVATBANK---------//
var currenceExchange = [];

fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => {

        response.json().then(function(data) {
            data.map( item => {
                currenceExchange.push(item)
            })
        });
    })

//-----END----CURRENCY PRIVATBANK---------//

var date = new Date;

//---------TO NUMBER---------//
function number(el) {
    return parseFloat(el)
}
//----END-----TO NUMBER---------//


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

if (document.querySelector('.count')){
    document.querySelectorAll('.count').forEach(item => {
        item.addEventListener('click', function (e) {
            if (item.classList.contains('delivery')){
                var city = this.parentNode.querySelector('#delivery-from-city');

                isEmpty(city);

                if(!this.parentNode.querySelector('.not-complete')){
                    this.closest('.calculator-block').classList.add('active');
                    this.closest('.calculator-block').querySelector('p').innerHTML = `Стоимость доставки из аукциона ${auction} составит ${destination[city.value][state]} $`;

                }
            }

            if (item.classList.contains('tax')){

                var yearVal = checkEl(document.querySelector('#year'), 3, 5);
                var age = (date.getFullYear() + 1) - yearVal;
                var engineСapacityVal = checkEl(document.querySelector('#engineСapacity'), 2, 5);
                var priceVal = checkEl(document.querySelector('#price'), 3, 9);
                var fuelValue = parseInt(isEmpty(document.querySelector('#fuel')));


                if(this.parentNode.querySelector('.not-complete')){
                    return
                } else {

                    this.parentNode.parentNode.classList.add('active');

                    var usd = currenceExchange['0']['buy'];
                    var eur = currenceExchange['1']['buy'];
                    var currName = currenceExchange['1']['ccy'];

                    priceVal = usdToEur( priceVal, usd, eur )

                    var excisePrice = parseInt(fuelValue * age * engineСapacityVal);
                    document.querySelector('.excise').innerHTML = `${excisePrice} ${currName}`

                    var fee = parseInt(priceVal / 10);
                    document.querySelector('.fee').innerHTML = `${fee} ${currName}`;

                    var nds = parseInt((priceVal + fee + excisePrice) * 0.2);
                    document.querySelector('.nds').innerHTML = `${nds} ${currName}`;

                    var companyTax = 700;

                    var deliveryFromUSA = 1000;



                    document.querySelector('.all-fee').innerHTML = `${excisePrice + fee + nds} ${currName}`;

                }
            }

        })
    })

    document.querySelectorAll('.agree').forEach(item => {
        item.addEventListener('click', function () {
            this.parentNode.parentNode.classList.remove('active');
        })
    })
}




if (document.querySelector('.status-delivery')){
    var progressLine;
    document.querySelectorAll('.status-delivery').forEach(item => {

        var activeItem = item.querySelectorAll('.active').length;

        if (activeItem === 1){
            progressLine = 0;
        } else if(activeItem === 2){
            progressLine = 50;
        } else {
            progressLine = 100;
        }
        item.querySelector('.progress-bar').style.width = `${progressLine}%`
    })
}


var destination = [];
var state;
var auction;
var citySelect = document.querySelector('#delivery-from-city');



if (document.querySelector('#delivery-from-auction')){
    document.querySelector('#delivery-from-auction').addEventListener('change', function() {

        var select = this.value.split(' ');
        state = select[1];
        auction = select[0];

        citySelect.innerHTML = '<option value="000"></option>'
        destination = []
        getDestinationData(`./../json/${auction.toLowerCase()}.json`)

    })
}



function getDestinationData(src) {
    fetch(src)
        .then(response => {
            response.json().then(function(data) {
                data.map(function(item) {
                    destination.push(item)
                })
            });

        })
        .then(function () {
            var i = 0;

            setTimeout(()=>{
                destination.map(item => {
                    console.log(item)
                    if (item[state]) {
                        citySelect.innerHTML += `<option value=${i}>${item['DESTINATION ('+auction+')']}</option>`
                        i++
                    }
                })
            },100)
        })
}

//-----------------delivery block-----------------//

if (Element('.more-about-delivery')) {
    Element('.more-about-delivery').addEventListener('click', () => {
        Element('.delivery-container').classList.add('_active')
        Element('body').classList.add('hidden');
        Element('.fogging').classList.add('active')
    })

    Element('.close-delivery-block').addEventListener('click', () => {
        Element('.delivery-container').classList.remove('_active')
        Element('body').classList.remove('hidden');
        foggingOff();
    })
}