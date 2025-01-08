function parosDarab(szamok:number[]): number{
    var parosSzamokOsszege:number = 0;
    for(var i:number = 0;i < szamok.length;i++){
        if(szamok[i] % 2 == 0){
            parosSzamokOsszege++;
        }
    }
    return parosSzamokOsszege;
};