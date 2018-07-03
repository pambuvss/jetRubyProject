$(document).ready(function() {
    var isValidateEmail = false;
    var isValidateMessage = false;
    var isValidateName = false;
    var isValidateAdress = false;
    var isValidatePrice = false;

    var regexName = /(^([а-яА-ЯёЁa-zA-Z0-9,.!-?]+\s*){0,29})(\s*)$/;
    $('#hotel_name').blur(function(){
        isValidateName = validateField($(this),regexName,"Enter your name of hotel(no more 30 symbols)",isValidateName);
        activeSubmitButton();
    });
    $('#hotel_addr').blur(function(){
        isValidateAdress = validateField($(this),regexName,"Enter your adress of hotel(no more 30 symbols)",isValidateAdress);
        activeSubmitButton();
    });




    var regexMessage = /(^([а-яА-ЯёЁa-zA-Z0-9,.!-?]+\s*){0,29})([а-яА-ЯёЁa-zA-Z0-9,.!-?]+[\s+]?)$/;
     $('#hotel_descr').blur(function(){
         isValidateMessage = validateField($(this),regexMessage,"Enter your message(no more 300 symbols)",isValidateMessage);
         activeSubmitButton();
     });

    // var regexFio = /([А-ЯЁ][а-яё]+[\-\s]?){3,}/;
    // $("#form_fio").blur(function () {
    //     isValidateFio = validateField($(this), regexFio, "Введите Ф.И.О.(русскими буквами)", isValidateFio);
    //     activeSubmitButton();
    // })
    var regexMail = /.+@.+\..+/i;
    $("#user_email").blur(function () {
        isValidateEmail = validateField($(this), regexMail, "Please enter correct e-mail", isValidateEmail);
        activeSubmitButton();
    });

    function activeSubmitButton() {
        var submit = $(".dis-but");
        if (isValidateEmail) {
            submit.prop("disabled", false);
        } else {
            submit.prop("disabled", true);
        }
    }
    var regexPrice = /(^(\d+$))(\s*)$/;
    $('#hotel_price').blur(function () {
        isValidatePrice = validateField($(this), regexPrice, "Please enter your price", isValidatePrice);
        activeSubmitButton();
    })
        .keydown(function (event) {
        // Разрешаем: backspace, delete, tab и escape
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
});