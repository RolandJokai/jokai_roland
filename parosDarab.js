function parosDarab(szamok) {
    var parosSzamokOsszege = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosSzamokOsszege++;
        }
    }
    return parosSzamokOsszege;
}
;
