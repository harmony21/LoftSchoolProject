//console.log('in common.js');
//console.log($);

    var submitForm = function(ev) {
    ev.preventDefault();
//    console.log('I am in sumbitForm');
    
    var form = $(ev.target);
    
    ajaxForm(form).done(function(msg) {
            var mes = msg.mes,
                status = msg.status;
            if (status === 'OK') {
                form.append('<p class="success">' + mes + '</p>');
            } else {
                form.append('<p class="error">' + mes + '</p>');
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