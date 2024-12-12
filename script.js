let attempts = 1;
let onyes = new Audio('hack.mp3');
let onstart = new Audio('ephi.mp3');
onyes.volume = 1;

document.getElementById('yesBtn').addEventListener('click', function () {

    onstart.pause();
    onyes.play();

    setTimeout(function () {
        alert('❤️');
        location.reload(); 
    }, 3000);
});


const phrases = [
  
        "Χρόνια πολλά Μαρία μου!❤️❤️❤️", 
        "Σου εύχομαινα είσαι πάντα χαρούμενη.",
        "Γιατί έχεις το ποιό ωραίο χαμόγελο!❤️",
        "!",
        "!",
        "!",
        "!",
        "!",
        "!"





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
        noBtn.style.top = '50%';
        //yesBtn.style.transform = 'translateX(-50%)';
       // yesBtn.style.fontSize = ;
    }
   
});
