function validateField(element, regex, errorMessage) {
    var parent = element.parent().eq(0);
    if(!regex.test(element.val()) || element.val() == ""){
        if(!parent.hasClass("error")) {
            parent.addClass("error");
            showError(parent,errorMessage);
        }
        return false;
    } else {
        if(!parent.hasClass("correct")) {
            parent.addClass("correct");
            resetError(parent);
        }
        return true;
    }
}
function showError(container,errorMessage)
{
    if(container.hasClass("correct")) {
        container.removeClass("correct");
    }
    var div = $("<div>").addClass("error-messages")
        .text(errorMessage);
    container.append(div);
}
function resetError(container) {
    if(container.hasClass("error")) {
        container.removeClass("error");
    }
    //console.log(container.children().filter('.error-messages'));
    container.children().filter('.error-messages').detach();
}