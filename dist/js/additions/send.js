// отправка данных с формы
function sendData(item) {

    var data = new URLSearchParams(new FormData(item)).toString()

    var option = {
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'firstname=12121&phone=111111'
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
        console.log(this)
        this.classList.add('active');
        setTimeout(function () {
            document.querySelector('.callback-block').classList.remove('active');
        },3000);
        sendData(this)
    })
}