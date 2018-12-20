// JS by Dan Høegh
// UCN MMD 2018

window.onload = function() {

    // comment section show/hide
    var myCheckbox = document.querySelector('#hasComments');
    var commentSection = document.querySelector('#commentsection');

    myCheckbox.addEventListener('change', function() {
        if (myCheckbox.checked) {
            commentSection.classList.add('visible');
        } else {
            commentSection.classList.remove('visible');
        }
    });

    // Submit button
    var acceptTerms = document.querySelector('#acceptTerms');
    var submitBtn = document.querySelector('#submitBtn');

    acceptTerms.addEventListener('change', function() {
        if (acceptTerms.checked) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });

    // Select value
    var showLink = document.querySelector('#showLink');

    showLink.addEventListener('click', function(event) {
        event.preventDefault();

        var theValue = document.querySelector('#mySelect').value;
        var elmSel = document.querySelector('#selectResult');
        elmSel.innerHTML = elmSel.innerHTML + '<br/>' + theValue + '<p>Mads er grim</p>' + '<img src="assets/images/Madsreigtz.jpg" height="600px" width="800px">'
    });

    // Select and do something to all input elements
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.add('dark');
    }
}