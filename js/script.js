


$('input[name=phone').mask("+7(999)999-99-99");

//modal

    // $('[data-modal="thanks"]').on('click',function() {
    //     $('.overlay, #thanks').fadeIn('slow');
    // }); 
    $('.modal__close').on('click',function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function(){
            // $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите Ваш номер телефона",
                
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#call_me');
    validateForms('#order form');

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    
