function osszesOszto(szam:number): number[] {
    var egeszOsztok: number[] = [szam, 1];

    for (var i: number = 2; i <= szam / 2; i++) {
        if (szam % i == 0) {
            egeszOsztok.push(i);
        }
    }
    return egeszOsztok.sort((a, b) => a - b);
};

