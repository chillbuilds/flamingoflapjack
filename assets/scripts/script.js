$(document).ready(function() {
    $("#password-input").focus()

    $(document).keydown(function(event) {
        if (event.shiftKey) {
            $("#password-input").val('')
            $("#password-input").focus()
        }
      })

    $("#password-input").on("input", function() {
        let inputValue = $(this).val()
        if(inputValue == 'asdf'){
            console.log('got in')
            $('.container').attr('style', 'display: inline-block')
        }
      })
})