$(() => {
    const params = new URLSearchParams(window.location.search)
    document.getElementById('user').innerHTML += params.get('username');
    var x = params.get('numberOfcards');
    var count = 0;
    var sec = 0;
    var precent = 0;

    var back1 = "/img/png-128/angry-face-128x128-189765.png";
    var back2 = "/img/png-128/facebook-128x128-189780.png";
    var back3 = "/img/png-128/tumblr-128x128-189762.png";
    var back4 = "/img/png-128/whatsapp-128x128-189795.png";
    var back5 = "/img/png-128/soundcloud-128x128-189763.png";
    var back6 = "/img/png-128/youtube-128x128-189778.png";
    var back7 = "/img/png-128/twitter-128x128-189733.png";
    var back8 = "/img/png-128/snapchat-128x128-189797.png";
    var back9 = "/img/png-128/pinterest-128x128-189745.png";
    var back10 = "/img/png-128/messenger-128x128-189789.png";
    var back11 = "/img/png-128/medium-128x128-189723.png";
    var back12 = "/img/png-128/google-plus-128x128-189736.png";
    var back13 = "/img/png-128/flickr-128x128-189748.png";
    var back14 = "/img/png-128/facebook-128x128-189772.png";
    var back15 = "/img/png-128/instagram-128x128-189771.png";
    var back16 = "/img/png-128/google-plus-128x128-189758.png";
    var back17 = "/img/png-128/tumblr-128x128-189731.png";
    var back18 = "/img/png-128/youtube-128x128-189730.png";
    var back19 = "/img/png-128/linkedin-128x128-189755.png";
    var back20 = "/img/png-128/instagram-128x128-189802.png";
    var back21 = "/img/png-128/medium-128x128-189727.png";
    var back22 = "/img/png-128/youtube-128x128-189722.png";
    var back23 = "/img/png-128/whatsapp-128x128-189779.png";
    var back24 = "/img/png-128/messenger-128x128-189789.png";
    var back25 = "/img/png-128/orkut-128x128-189798.png";
    var back26 = "/img/png-128/google-plus-128x128-189759.png";
    var back27 = "/img/png-128/reddit-128x128-189749.png";
    var back28 = "/img/png-128/reddit-128x128-189728.png";
    var back29 = "/img/png-128/vkcom-128x128-189760.png";
    var back30 = "/img/png-128/medium-128x128-189729.png";



    var z = [back1, back2, back3, back4, back5, back6, back7, back8, back9, back10, back11, back12, back13, back14, back15, back16, back17, back18, back19, back20,back21,back22,back23,back24,back25,back26,back27,back28,back29,back30];
    shuffle(z);
    const image = document.createElement('img');

    var i = 0;

    for (let index = 0; index < 2 * x; index++) {
        let code = ` 
        <div class="card">
        `;
        document.querySelector('.CardCreator').innerHTML += code;

        if (index % 2 == 0 && index != 0) {
            i++;
        }

        image.src = z[i];
        document.getElementsByClassName('card')[index].append(image);

    }
    var cards = $(".card");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    for (let index = 0; index < $('.card').length; index++) {
        flip($('.card')[index]);
    }
    
    $('.flip').click(function (e) {
        if (count < 2 || $(this).hasClass("flip")) {
            $(this).toggleClass("flip back");
            count++;
            if (count == 2) {
                $('.flip').addClass("test");
                var areImageIdentical = false;
                var images = $('.back');
                var img1 = images.children()[0].src;
                var img2 = images.children()[1].src;
                if (img1 == img2) {
                    setTimeout(function () {
                        $('.back').addClass('match');
                        match();
                        progress();
                    }, 1000);
                }

                setTimeout(function () {
                    $('.card').addClass('flip');
                    count = 0;
                    images = [];
                    $('.back').removeClass('back');
                    $('.flip').removeClass("test");
                    $('.match').toggleClass('flip');
                }, 1000);
            }
        }
    });

    function pad(val) { return val > 9 ? val : "0" + val; }
    var timer = setInterval(function () {
        $("#seconds").html(pad(++sec % 60));
        $("#minutes").html(pad(parseInt(sec / 60, 10)));
    }, 1000);

    function flip(event) {
        $(event).toggleClass('flip');

    }
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    function Restart() {
        window.location.href = "homePage.html";
    }
    let popup = document.getElementById("popup");
    function openPopup(){
        popup.classList.add("open-popup");
        document.getElementById( "contain" ).style.visibility = "visible";
        for (let index = 0; index < $('.card').length; index++) {
            $('.card')[index].style.pointerEvents = "none";
        }
    }
    function closePopup(){
        popup.classList.remove("open-popup");
    }
    function progress(){
        precent += (1/x) * 100;
        document.getElementById( "barz" ).style.width = precent + "%";
        document.getElementById( "barz").innerHTML = Math.floor(precent) + "% " + " (complete)"; 
    }

    function match() {
        if (($('.match').length) == 2 * x) {
        clearInterval(timer);
        min = $('#minutes')[0].innerHTML;
        sec = $('#seconds')[0].innerHTML;
        document.querySelector('.endMsg').innerHTML += " Well done " + params.get('username')+ "!!  <br>" + "It took you: <br>" +  "<b>" + min +":" + sec + "</b>" + " to finish.<br> Give it another try" ;
        openPopup()
        $('.btn4').click(function(event){
            closePopup();
            Restart();
        });
    }
}

});