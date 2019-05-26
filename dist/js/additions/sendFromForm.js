//--------------------ОТПРАВКА ДАННЫХ ФОРМЫ--------------------//
function sendData(item) {

    var email = item.querySelector('#email-callback-form').value;
    var name = item.querySelector('#name-callback-form').value;
    var phone = item.querySelector('#tel-callback-form').value;

    var option = {
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'firstname='+name+'&phone='+phone+'&email='+email+''

    };

    fetch('../php/send.php', option)
        .then(response => {
            if (response.ok){
            }
        })
}
//---------END-----------ОТПРАВКА ДАННЫХ ФОРМЫ--------------------//



//----------------ПРОВЕРКА ЗАПОЛНЕНЫ ЛИ ПОЛЯ----------//
if( document.querySelector('form.send-data')){
    document.querySelector('form.send-data').addEventListener('submit', function(e) {
        e.preventDefault();
        var email = this.querySelector('#email-callback-form');
        var name = this.querySelector('#name-callback-form');
        var phone = this.querySelector('#tel-callback-form');
        var emailOk = false;
        var nameOk = false;
        var phoneOk = false;

        if (name.value.length < 2 ){
            name.value = '';
            name.setAttribute('placeholder','Введите имя');
            name.parentNode.classList.add('false')
        } else {
            name.parentNode.classList.remove('false')
            nameOk = true;
        }

        if (phone.value.length < 8){
            phone.value = '';
            phone.setAttribute('placeholder', 'Введите номер 123-456-7890')
            phone.parentNode.classList.add('false')

        } else {
            phone.parentNode.classList.remove('false')
            phoneOk = true;
        }

        if (email.value.length < 5 ){
            email.value = '';
            email.setAttribute('placeholder','Введите email');
            email.parentNode.classList.add('false')
        } else {
            email.parentNode.classList.remove('false')
            emailOk = true;
        }


        if ( nameOk == true && phoneOk == true && emailOk == true){
            this.classList.add('active');
            setTimeout(function () {
                document.querySelector('.callback-block').classList.remove('active');
            },4000);
            sendData(this)
        }

    })
}
//--------END--------ПРОВЕРКА ЗАПОЛНЕНЫ ЛИ ПОЛЯ----------//

