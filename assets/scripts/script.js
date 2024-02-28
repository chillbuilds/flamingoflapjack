let unlocked = false

$(document).ready(function() {
    $("#password-input").focus()

    $(document).keydown(function(event) {
        if(event.shiftKey){
            $("#password-input").val('')
            $("#password-input").focus()
        }
        if(event.which === 27 && unlocked == true){
            unlocked = false
            $('#err-fakeout').attr('style', 'display: block')
            $('.container').attr('style', 'display: none')
            $('body').attr('style', 'background: white')
        }
      })

    $("#password-input").on("input", function() {
        let inputValue = $(this).val()
        if(inputValue.toLowerCase() == 'asdf' && unlocked == false){
            $('#err-fakeout').attr('style', 'display: none')
            $('.container').attr('style', 'display: block')
            $('body').attr('style', 'background: url("https://flamingoflapjack.com/files/car-bg.gif") no-repeat center center fixed; background-size:cover; user-select:none;')
            unlocked = true
        }
      })
})

let removeControls = () => {
    setInterval()
}