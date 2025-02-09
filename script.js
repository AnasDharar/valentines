const texts = [
    "Ever since we met, every conversation with you has been magical.",
    "You bring a kind of joy and warmth that I never knew I needed.",
    "I love the way you make me feel, and...",
    "You’re special to me in a way that’s hard to put into words.",
    "So, this Valentine’s Day, I just want to ask -",
    "Will you be my Valentine?"
]
const gifs = [
    "https://gifdb.com/images/high/animated-cat-gif-file-419kb-6mdd03udgr7onpct.gif",
    "https://media.tenor.com/UW9cxCBEfcQAAAAC/cute-cat.gif",
    "https://i.pinimg.com/originals/20/1d/8c/201d8cbefaf236f56dea366d1691da01.gif",
    "https://media1.tenor.com/images/e36eccf0b7c83ebbe454246f768db5f3/tenor.gif?itemid=4958448",
    "https://i.pinimg.com/originals/ac/8f/2f/ac8f2f3ca76895afa376d919e664d8d5.gif",
    "https://media.tenor.com/images/c78ca6bb4eec3caa980834f3ed5cc00d/tenor.gif"
]
let i = 0;
window.onload = function(){

container = document.getElementById("maintext");
gif = document.getElementById("gif");
nextb = document.getElementById("next");
yes = document.getElementById("yes");
no = document.getElementById("no");
}
function next(){
    container.innerText = texts[i];
    gif.src = gifs[i];
    i+=1;
    console.log(i);
    if(i==6){
        // console.log('hahahah');
        // console.log();
        nextb.style.display = "none";
        yes.style.display = "block";
        no.style.display = "block";
    }
}
let h = 100;
let w = 200;
let h2 = 100;
let w2 = 200;
function saidno(){
    h = h+0.3*h;
    w = w+0.3*w;
    h2 = h2-0.3*h2;
    w2 = w2-0.3*w2;
    yes.style.height =`${h}px`; 
    yes.style.width =`${w}px`; 
    no.style.height =`${h2}px`; 
    no.style.width =`${w2}px`;
    if(h2<17){
        no.style.display = "None";
        alert("You have to say yes. I am NOT asking.")
    } 
}

function saidyes(){
    container.innerText = "I knew you would accept it! Happy Valentine's Day! Love you!";
    gif.src = "https://i.pinimg.com/originals/d4/d0/55/d4d055753376360ea5b935cc4d16e7dc.gif";
    no.style.display = "None";
    yes.style.display = "None";
}