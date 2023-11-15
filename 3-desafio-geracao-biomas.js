const quantidadeGolpes = parseInt((4)); 
let minerais = [ "Carvao", "Ferro", "Diamante", "Pedra"];
for (let i = 1; i <= quantidadeGolpes; i++) {
    let minaIndex = (i-1) % minerais.length;
    console.log( (i) + ": " + minerais[minaIndex]);
}