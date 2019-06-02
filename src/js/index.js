var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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


document.querySelector('.fogging').addEventListener('click', function () {
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

// //-------AUCTION FEE---------//
// var auction_fee = [];
// fetch('../../json/auctionFee.json')
//     .then(response => {
//         response.json().then(function(data) {
//             data.map(function(item) {
//                 auction_fee.push(item)
//             })
//         });
//         console.log(auction_fee)

//     })