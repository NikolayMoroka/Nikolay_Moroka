$("#sendMail").on("click", function() {
    var mail = $("#email").val();
    var name = $("#name").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    if(email == "") {
        $("#errorMess").text("Введите Email")
        return false;
    } else if(name == "") {
        $("#errorMess").text("Введите Name")
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введите Phone")
        return false;
    } else if(message.length < 5) {
        $("#errorMess").text("Введите Message не менее 5-ти символов")
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail/php',
        type: 'POST',
        cache: false,
        data: {
            'name': name, 'email': email, 'phone': phone, 'message': message
        },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("Сообщение не отправлено");
            else
                $("#mailForm").trigger("reset");
            alert(data);
            $("#sendMail").prop("disable", false);
        }
    });
});