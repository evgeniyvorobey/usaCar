if (document.querySelector('.our-services-item')){
    document.querySelectorAll('.our-services-item').forEach(item => {
        var vievportHeight = window.innerHeight;
        item.addEventListener('scroll', function () {
            var el = this.getBoundingClientRect();
            console.log('scroll')
            if (firstEl.top <= (vievportHeight - 100) ) {
                el[0].classList.add('active')
                // console.log(el[1].getBoundingClientRect())
            }else{
                el[0].classList.remove('active')
            }
        })
    })
}


document.addEventListener('scroll', function () {
    var vievportHeight = window.innerHeight;

    if (window.scrollY > 110) {
        document.querySelector('header').classList.add('fix-header');
        document.querySelector('main').classList.add('when-header-fixed');
    } else {
        document.querySelector('header').classList.remove('fix-header');
        document.querySelector('main').classList.remove('when-header-fixed');

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





// var swiper = new Swiper('.swiper-container', {
//     pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//         clickable: true
//     },
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
//     speed: 400,
//     spaceBetween: 100
// });
foggingOn = () => document.querySelector('.fogging').classList.add('active');
foggingOff = () => document.querySelector('.fogging').classList.remove('active');

closeHeaderMenu = () => document.querySelector('.hamburger').classList.remove('active')

document.querySelector('.fogging').addEventListener('click', function () {
    foggingOff();
    document.querySelector('.navigation-panel').classList.remove('active');
})


document.querySelector('.hamburger').addEventListener('click', function () {
    this.parentNode.classList.toggle('active');
    foggingOn();

})

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
        this.parentNode.classList.toggle('active');
    })
})

if (document.querySelector('.count')){
    document.querySelectorAll('.count').forEach(item => {
        item.addEventListener('click', function (e) {
            this.parentNode.parentNode.classList.add('active')
        })
    })

    document.querySelectorAll('.agree').forEach(item => {
        item.addEventListener('click', function () {
            this.parentNode.parentNode.classList.remove('active');
        })
    })
}
// if(document.querySelector('.thnx-button')){
//     document.querySelectorAll('.thnx-button').forEach(item => {
//         item.addEventListener('click', function () {
//             this.parentNode.parentNode.classList.add('active');
//             setTimeout(function () {
//                 document.querySelector('.callback-block').classList.remove('active');
//             },3000)
//
//         })
//     })
//
// }

// отправка данных с формы
function sendData(item) {

    // var data = new URLSearchParams(new FormData(item)).toString()
    var name = item.querySelector('#name-callback-form').value;
    var phone = item.querySelector('#tel-callback-form').value;

    var option = {
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'firstname='+name+'&phone='+phone+''
    };

    fetch('../php/send.php', option)
        .then(response => {
            if (response.ok){
                console.log('Do something')
            }
        })
}

if( document.querySelector('form.send-data')){
    document.querySelector('form.send-data').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = this.querySelector('#name-callback-form');
        var phone = this.querySelector('#tel-callback-form');
        var nameOk = false;
        var phoneOk = false;
        var phoneno = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
        console.log(phone.value.match(phoneno))

        if (name.value.length < 2 ){
            name.value = '';
            name.setAttribute('placeholder','Введите имя');
            name.parentNode.classList.add('false')
            console.log('enter valid name');
        } else {
            name.parentNode.classList.remove('false')
            nameOk = true;
        }

        if (phone.value.match(phoneno) === null){
            phone.value = '';
            phone.setAttribute('placeholder', 'Введите номер 123-456-7890')
            phone.parentNode.classList.add('false')
            console.log('enter valid number');

        } else {
            phone.parentNode.classList.remove('false')
            phoneOk = true;
        }


        console.log(nameOk, phoneOk)
        if ( nameOk == true && phoneOk == true ){
            this.classList.add('active');
            setTimeout(function () {
                document.querySelector('.callback-block').classList.remove('active');
            },4000);
            sendData(this)
        }

    })
}

