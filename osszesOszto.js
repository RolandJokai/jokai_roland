function osszesOszto(szam) {
    var egeszOsztok = [szam, 1];
    for (var i = 2; i <= szam / 2; i++) {
        if (szam % i == 0) {
            egeszOsztok.push(i);
        }
    }
    return egeszOsztok.sort(function (a, b) { return a - b; });
}
