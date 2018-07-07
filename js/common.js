    var submitForm = function(ev) {
    ev.preventDefault();
    
    var form = $(ev.target);
    
    ajaxForm(form).done(function(msg) {
            var mes = msg.mes,
                status = msg.status;

            if (status === 'OK') {
                $('.submit').click().fancybox({});
            } else {
                alert("Request failed: " + textStatus);
            }
        });
}

    var ajaxForm = function (form) {
    
        url = form.attr('action'),
        data = form.serialize();
    
        return $.ajax ({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
    }).fail(function(jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    }

$('#form-feedback').on('submit', submitForm);