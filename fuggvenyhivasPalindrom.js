function fuggvenyhivasPalindrom(fv) {
    var szoveg = fv().trim();
    var eredmeny = false; //false default   
    var megforditottSzoveg = szoveg.split('').reverse().join('').trim();
    if (szoveg == megforditottSzoveg) {
        eredmeny = true;
    }
    return eredmeny;
}
