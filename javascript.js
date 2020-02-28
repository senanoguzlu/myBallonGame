$(document).ready(function() {
    var game = $('#game')

    var xal = 0
    var kordinantX = 0
    var balonstatus
    var reng = 0
    var balon
    var baloncssWidth
    var baloncssHeight
    var bosalt

    function newbox() {
        count = 6000
        $('#gameoverimg').hide()
        $('#gameover').hide()
        $('.helps').hide()
        $('.helps').hide()
        $('#haqqindashow').hide()
        $('#qeydiyyatshow').hide()
        $('.cloud').show()
        var yarat = 1;
        var xalprint = $('#xal');
        var lovhe = $('.lovhe')
        var vaxt = $('#vaxt')
        vaxt.css('color', 'crimson')
        vaxt.show()
        xalprint.show()
        lovhe.show()
        var div = $('#game')

        function vaxtvermek() {
            top.css('transition', '10s')
            top.css('transform', `translateY(500px)`)
        }

        xalprint.css('color', 'white').css('font-size', '40px')
        xalprint.addClass('animated bounce')
        xalprint.css('color', 'crimson')
        xalprint.text('0')
        var counter = setInterval(timer, 10);

        function timer() {
            if (count <= 0) {
                clearInterval(counter);
                return gameover();
            }
            count--;
            document.getElementById("vaxt").innerHTML = count / 100 + " s";
        }

        function gameover() {
                    $('.esas').show()
            bosalt.empty()
            game.append('<img class="animated bounceInDown delay-0.6s" id="gameoverimg" src="shekiller/gameover.png" width="300" height="250"/>')
            $('#gameover').show()
            $('.helps').addClass('animated bounceInUp delay-0.5s')
            $('.helps').show()
            $('.helps').css('left', '250px')
            $('.helps').css('top', '350px')
            $('#gamestart').show()
            $('#giris').text('Tekrar Oyna')
            $('#qeydiyyat').show()
            $('#haqqinda').hide()
        }

        setInterval(() => {
            var top = $('<div>')
            bosalt = top
            top.addClass('#top')
            top.css('z-index', '2')
            top.css('position', 'absolute').css('top', '-30px')

            if (yarat < 1000) {
                yarat += 1
                reng = reng + Math.floor(Math.random() * 10);
                balonrand = 1 + Math.floor(Math.random() * 20);
                balonshekilleri()
                kordinantY = Math.floor(Math.random() * 690);
                kordinantX = Math.floor(Math.random() * 690);
                top.css('margin-left', kordinantX)
                top.css('margin-right', kordinantX)
                top.css('background', `${balon}`).css('width', `${baloncssWidth}`).css('height', `${baloncssHeight}`)
                top.addClass(`${balonstatus}`)
                top.on('click', function() {
                    vaxt.css('color', 'green')
                    count = count + 500
                    top.hide()
                    xal = xal + 1
                    xalprint.animate({ opacity: '0.4' }, "slow");
                    xalprint.animate({ opacity: '0.8' }, "slow");
                    xalprint.animate({ opacity: '0.4' }, "slow");
                    xalprint.animate({ opacity: '0.8' }, "slow");
                    xalprint.text(`${xal}`)
                    if (xal == 10) {
                        var body = $('body')
                        body.css('background-image', 'url(shekiller/level1.png)')
                    }

                })
                div.append(top)

            }
            setInterval(() => {
                top.css('transition', '10s')
                top.css('transform', `translateY(650px)`)
            }, 100);
            setInterval(() => {
                vaxt.css('color', 'red')
                count = count - 100
                top.hide()
            }, 6200);

        }, 500);


    }

    function balonshekilleri() {
        if (balonrand == 1) {
            balon = 'url(/shekiller/balon1.png)'
            baloncssWidth = '25px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 2) {
            balon = 'url(/shekiller/balon2.png)'
            baloncssWidth = '25px'
            baloncssHeight = '50px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 3) {
            balon = 'url(/shekiller/balon3.png)'
            baloncssWidth = '25px'
            baloncssHeight = '50px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 4) {
            balon = 'url(/shekiller/balon4.png)'
            baloncssWidth = '25px'
            baloncssHeight = '50px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 5) {
            balon = 'url(/shekiller/balon5.png)'
            baloncssWidth = '25px'
            baloncssHeight = '50px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 6) {
            balon = 'url(/shekiller/balon6.png)'
            baloncssWidth = '25px'
            baloncssHeight = '50px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 7) {
            balon = 'url(/shekiller/newbalon1.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 8) {
            balon = 'url(/shekiller/newbalon2.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 9) {
            balon = 'url(/shekiller/newbalon3.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 10) {
            balon = 'url(/shekiller/newbalon4.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 11) {
            balon = 'url(/shekiller/newbalon5.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 12) {
            balon = 'url(/shekiller/newbalon6.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 13) {
            balon = 'url(/shekiller/newbalon7.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        } else if (balonrand == 14) {
            balon = 'url(/shekiller/newbalon8.png)'
            baloncssWidth = '35px'
            baloncssHeight = '45px'
            balonstatus = 'sadebalon'
        }
        if (balonrand == 15) {
            balon = 'url(/shekiller/bonusbalon1.png)'
            baloncssWidth = '40px'
            baloncssHeight = '40px'
            balonstatus = 'bonusballoon'

        }
        if (balonrand == 16) {
            balon = 'url(/shekiller/bonusbalon2.png)'
            baloncssWidth = '40px'
            baloncssHeight = '40px'
            balonstatus = 'bonusballoon'

        }
        if (balonrand == 17) {
            balon = 'url(/shekiller/bonusbalon3.png)'
            baloncssWidth = '40px'
            baloncssHeight = '40px'
            balonstatus = 'bonusballoon'

        }
        if (balonrand == 18) {
            balon = 'url(/shekiller/bonusbalon4.png)'
            baloncssWidth = '40px'
            baloncssHeight = '40px'
            balonstatus = 'bonusballoon '

        }
        if (balonrand == 19) {
            balon = 'url(/shekiller/bonusbalon5.png)'
            baloncssWidth = '40px'
            baloncssHeight = '40px'
            balonstatus = 'bonusballoon'

        }
        if (balonrand == 20) {
            balon = 'url(/shekiller/bonusbalon6.png)'
            baloncssWidth = '40px'
            baloncssHeight = '40px'
            balonstatus = 'bonusballoon'
        }
    }
    $('#gamestart').on('click', function() {
        $('.basla').show()
        $('.esas').hide()
        $('.helps').hide()
        $('#haqqindashow').hide()
        $('#qeydiyyatshow').hide()
        $('.cloud').show()
        newbox()
    })
    $('#haqqinda').on('click', function() {
        $('.cloud').hide()
        $('#haqqindashow').addClass('animated bounceInRight')
        $('#haqqindashow').show()
        $('#haqqinda').hide()
        $('.helps').css('left', '120px')
        $('.helps').css('top', '450px')
        $('#qeydiyyatshow').hide()
        $('#qeydiyyat').show()
    })
    $('#qeydiyyat').on('click', function() {
        $('#gameoverimg').hide()
        $('.helps').css('left', '120px')
        $('.helps').css('top', '450px')
        $('#gameover').hide()
        $('#qeydiyyat').hide()
        $('#haqqindashow').hide()
        $('#haqqinda').show()
        $('.cloud').hide()
        $('#qeydiyyatshow').show()
    })

})