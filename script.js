var txt = prompt('Inserisci un testo: ').split(/[ !-?.,]+/);
var toCensor = prompt('Inserisci le parole da censurare: ').split(" ");
var censorCount = 0;

console.log(txt);

  function censor(text,wordToCensor) {
    for (var i = 0; i < text.length; i++) {
      if (wordToCensor.includes(text[i])) {
        text[i] = "xxx";
        censorCount++
      }
    }
  }

censor(txt,toCensor);

document.writeln(txt.join(" "));
console.log("Parole censurate: "+censorCount);
