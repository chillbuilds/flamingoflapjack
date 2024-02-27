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
        if(inputValue.toLowerCase() == 'asdf'){
            console.log('got in')
            $('#err-fakeout').attr('style', 'display: none')
            $('.container').attr('style', 'display: inline-block')
            $('body').attr('style', 'background: url("https://flamingoflapjack.com/files/car-bg.gif") no-repeat center center fixed; background-size:cover; user-select:none;')
        }
      })
})

let removeControls = () => {
    setInterval()
}