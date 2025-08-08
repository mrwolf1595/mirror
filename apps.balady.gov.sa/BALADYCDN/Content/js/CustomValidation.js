//Auther: Sameh Hamdy

function validateControlsWithParsely(controlSelector) {
    let isValid = true;
    $(controlSelector).each(function () {
        if ($(this).parsley().validate() !== true) isValid = false;
    });
    return isValid;
}

function validateControlsGroup(_$frm,groupName) {
    let isValid = _$frm.parsley().validate({ group: groupName });
    return isValid;
}



function showErrors(div, response) {
    div.append("<div class='alert alert-danger'>" + response.ErrorListHtml + "</div>");
}


function validateControlValue(controlName, validationMessage) {
    let _$control = $('#' + controlName)
    let validationResult = true;
    if (!_$control.val()) {
        _$control.parsley().addError('forcederror', { message: validationMessage, updateClass: true });
        validationResult = false;
    }
    else {
        _$control.parsley().reset();
    }
    return validationResult
}

function validateControlValuePattern(controlName, validationMessage, pattern) {
    let _$control = $('#' + controlName)
    let validationResult = true;
    _$control.parsley().reset();
    if (!pattern.test(_$control.val())) {
        _$control.parsley().addError('forcederror', { message: validationMessage, updateClass: true });
        validationResult = false;
    }
    return validationResult
}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}