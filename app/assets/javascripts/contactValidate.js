$(document).ready(function() {
    var isValidateEmail = false;
    var isValidateDescription = false;
    var isValidateName = false;
    var isValidateCountry = false;
    var isValidatePrice = false;
    var isValidateState = false;
    var isValidateCity = false;
    var isValidateStreet = false;
    var isValidatePassword = false;
    var isValidateConfPassword = false;
    var isValidateEmail_1 = false;
    var isValidatePassword_1 = false;


    var regexName = /(^([а-яА-ЯёЁa-zA-Z0-9,.!-?]+\s*){0,29})(\s*)$/;
    $('#hotel_name').keyup(function(){
        isValidateName = validateField($(this),regexName,"Enter the name of your hotel(no more 30 symbols)",isValidateName);
        activeSubmitButton();
    });
    $('#hotel_addr1').keyup(function(){
        isValidateCountry = validateField($(this),regexName,"Enter the county of your hotel(no more 30 symbols)",isValidateCountry);
        activeSubmitButton();
    });
    $('#hotel_addr2').keyup(function(){
        isValidateState = validateField($(this),regexName,"Enter the state of your hotel(no more 30 symbols)",isValidateState);
        activeSubmitButton();
    });
    $('#hotel_addr3').keyup(function(){
        isValidateCity = validateField($(this),regexName,"Enter the city of your hotel(no more 30 symbols)",isValidateCity);
        activeSubmitButton();
    });
    $('#hotel_addr4').keyup(function(){
        isValidateStreet = validateField($(this),regexName,"Enter the street of your hotel(no more 30 symbols)",isValidateStreet);
        activeSubmitButton();
    });

   




    var regexMessage = /(^([а-яА-ЯёЁa-zA-Z0-9,.!-?]+\s*){0,29})([а-яА-ЯёЁa-zA-Z0-9,.!-?]+[\s+]?)$/;
     $('#hotel_descr').keyup(function(){
         isValidateDescription = validateField($(this),regexMessage,"Enter the description of your hotel(no more 300 symbols)",isValidateDescription);
         activeSubmitButton();
     });

    // var regexFio = /([А-ЯЁ][а-яё]+[\-\s]?){3,}/;
    // $("#form_fio").blur(function () {
    //     isValidateFio = validateField($(this), regexFio, "Введите Ф.И.О.(русскими буквами)", isValidateFio);
    //     activeSubmitButton();
    // })
    var regexMail = /.+@.+\..+/i;
    $("#user_email").change(function () {
        isValidateEmail = validateField($(this), regexMail, "Please enter correct e-mail", isValidateEmail);
        activeSubmitButton();
    });
    var regexPass = /^[a-z0-9_-]{6,18}$/;
    $('#user_password').keyup(function () {
        isValidatePassword = validateField($(this), regexPass, "Please enter your password (6 character minimum, but no more 18)", isValidatePassword);
        activeSubmitButton();
    })

    var regexMail = /.+@.+\..+/i;
    $("#user_email_1").change(function () {
        isValidateEmail_1 = validateField($(this), regexMail, "Please enter correct e-mail", isValidateEmail_1);
        activeSubmitButton();
    });
    var regexPass = /^[a-z0-9_-]{6,18}$/;
    $('#user_password_1').keyup(function () {
        isValidatePassword_1 = validateField($(this), regexPass, "Please enter your password (6 character minimum, but no more 18)", isValidatePassword_1);
        activeSubmitButton();
    })



    var regexPass = /^[a-z0-9_-]{6,18}$/;
    var password = $('#user_password').val();
    var confPassoword = $('#user_password_confirmation').val();
    $('#user_password_confirmation').keyup(function() {
        isValidateConfPassword = validateField($(this), regexPass, "Please confirm your password", isValidateConfPassword);
        if (password === confPassoword) {
            activeSubmitButton();
        }
        
    })

    function activeSubmitButton() {
        var submit = $(".dis-but");
        var submitGrey = $(".dis-but-grey");
        
        console.log(confPassoword);
        if ((isValidateEmail && isValidatePassword && isValidateConfPassword) || (isValidateEmail_1 && isValidatePassword_1) || (isValidateDescription && isValidateName && isValidateCity && isValidateCountry && isValidatePrice && isValidateState && isValidateStreet)) {
            submitGrey
                .prop("disabled", false)
                .css({"border-color": "#FDBE33 #000 #D77206", "background": "linear-gradient(#f5ae00, #f59500) #f5ae00"});
            submit.prop("disabled", false);
        } else {
            submitGrey
                .prop("disabled", true)
                .css({"border-color": "silver", "background": "grey"});
            submit.prop("disabled", true);
        }
    }

    
    var regexPrice = /(^(\d+$))(\s*)$/;
    $('#hotel_price').keyup(function () {
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