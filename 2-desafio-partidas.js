function ranking (vitorias, derrotas) {
    let playerLevel = vitorias - derrotas
    let level = " "

    if (playerLevel <= 10) {
        level = "Ferro"
    } else if (playerLevel > 10 && playerLevel <= 20){
        level = "Bronze"
    } else if (playerLevel > 20 && playerLevel <= 50) {
        level = "Prata"
    } else if (playerLevel > 50 && playerLevel <= 80) {
        level = "Ouro"
    } else if (playerLevel > 80 && playerLevel <= 90) {
        level = "Diamante"
    } else if (playerLevel > 90 && playerLevel <= 100) {
        level = "Lendário"
    } else {
        level = "Imortal"
    }

    return [playerLevel,level]
}

let [playerLevel,level] = ranking(600,30)

console.log("O herói tem um saldo de " + playerLevel + " e está no level " + level)