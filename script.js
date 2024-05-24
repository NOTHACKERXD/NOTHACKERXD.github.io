let attempts = 1;
let onyes = new Audio('hack.mp3');
let onstart = new Audio('ephi.mp3');
onyes.volume = 1;

document.getElementById('yesBtn').addEventListener('click', function () {

    onstart.pause();
    onyes.play();

    setTimeout(function () {
        alert('now your IP is mine hehehe ❤️');
        location.reload(); 
    }, 3000);
});


const phrases = [
  
        "Happy birthday Lydia!",
        "May your day be filled with laughter, joy, and unforgettable moments.",
        "Wishing you a day as bright and beautiful as you are!",
        "Cheers to another year of wonderful adventures and cherished memories!",
        "Sending you smiles, hugs, and lots of love on your special day!",
        "Here's to celebrating you and all the amazing things you bring into this world!",
        "May your birthday be sprinkled with happiness, wrapped in love, and filled with all your heart desires!",
        "Another year older, another reason to celebrate the incredible person you are!",
        "On your birthday, may you be surrounded by friends, family, and all the happiness life can offer!"





];

let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');

document.getElementById('noBtn').addEventListener('click', function () {

/*
    if (attempts === phrases.indexOf("THA GAMITHEIS FILE")) {

        noBtn.style.backgroundImage = "url('https://i1.prth.gr/images/w880/files/2022-11-10/tik_tok_in__2_.jpg')";
        noBtn.style.backgroundSize = "100% 100%";
        noBtn.style.color = "white";
    } else {
        noBtn.style.backgroundImage = "none";
        noBtn.style.color = "initial";
    }
 */

    if (attempts < phrases.length - 1) {
        onstart.play();
        let newQuestion = phrases[attempts];
        document.getElementById('question').textContent = newQuestion;
        //document.getElementById('question').style.fontSize = (16 + attempts) + 'px';
        attempts++;
    } else {
        document.getElementById('question').textContent = phrases[phrases.length - 1];
        noBtn.style.display = 'none';
        yesBtn.style.position = 'absolute';
        yesBtn.style.left = '45%';
        yesBtn.style.top = '45%';
        //yesBtn.style.transform = 'translateX(-50%)';
       // yesBtn.style.fontSize = ;
    }
   
});
