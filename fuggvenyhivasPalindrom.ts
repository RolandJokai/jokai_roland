function fuggvenyhivasPalindrom(fv:() => string):boolean{

    var szoveg:string = fv().trim();
    var eredmeny:boolean = false;   
    var megforditottSzoveg:string = szoveg.split('').reverse().join('').trim();

    if(szoveg == megforditottSzoveg){
        eredmeny = true;
    }
    return eredmeny;
}