$(document).ready(function() {
    $('#controller').attr('style', 'display:none')
    $("#password-input").focus()

    $(document).keydown(function(event) {
        if (event.shiftKey) {
            $("#password-input").val('')
            $("#password-input").focus()
        }
      })

    $("#password-input").on("input", function() {
        let inputValue = $(this).val()
        if(inputValue.toLowerCase() == 'asdf'){
            console.log('got in')
            $('#err-fakeout').attr('style', 'display: none')
            $('.container').attr('style', 'display: inline-block')
            $('body').attr('style', 'background: #EFECCA;')
            $('#video-background').attr('style', 'display: inline;')
        }
      })
})