$(document).ready(function() {
    $("#password-input").focus()

    $("#password-input").on("input", function() {
        let inputValue = $(this).val()
        if(inputValue == 'asdf'){
            $('.container').attr('style', 'display: inline-block')
        }
      })
})