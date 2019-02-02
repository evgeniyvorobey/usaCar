

// document.addEventListener('scroll', function() {
//     var vievportHeight = window.innerHeight;
//     var allContentBlock = document.querySelectorAll('.content-block');
//     var el = allContentBlock[allContentBlock.length - 1];
//     var el = el.getBoundingClientRect();

//     if (el.top <= vievportHeight ) {
//         document.querySelector('main').classList.add('green');
//     }else{
//         document.querySelector('main').classList.remove('green');
//     }
// })
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
    // var el = document.querySelectorAll('.car-container');
    // var firstEl = el[0].getBoundingClientRect();
    // var secondEl = el[1].getBoundingClientRect();
    //
    //
    // if (firstEl.top <= (vievportHeight - 100) ) {
    //     el[0].classList.add('active')
    //     // console.log(el[1].getBoundingClientRect())
    // }else{
    //     el[0].classList.remove('active')
    // }
    // if (secondEl.top <= (vievportHeight - 100) ) {
    //     el[1].classList.add('active')
    // }else{
    //     el[1].classList.remove('active')
    // }


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





var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 400,
    spaceBetween: 100
});
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
if(document.querySelector('.thnx-button')){
    document.querySelectorAll('.thnx-button').forEach(item => {
        item.addEventListener('click', function () {
            this.parentNode.parentNode.classList.add('active');
            setTimeout(function () {
                document.querySelector('.callback-block').classList.remove('active');
            },3000)

        })
    })

}
