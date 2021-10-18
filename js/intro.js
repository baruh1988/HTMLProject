const quotes={
    0:"Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
    1:"Those who can imagine anything, can create the impossible.",
    2:"If a machine is expected to be infallible, it cannot also be intelligent.",
    3:"It is possible to invent a single machine which can be used to compute any computable sequence.",
    4:"A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
    5:"We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    6:"Codes are a puzzle. A game, just like any other game.",
    7:"Programming is a skill best acquired by practice and example rather than from books."
}

function quoteOnLoad(){
    document.getElementById("quotes").innerHTML=quotes[Math.floor(Math.random()*8)];
}

var quoteChange = setInterval(changeQuote, 10000);

function changeQuote() {
    document.getElementById("quotes").innerHTML=quotes[Math.floor(Math.random()*8)];
}