let tab = new Array(); //Objet tableau
// let tab = []; //Tableau vide

function add_name(){
    tab.push(prompt("Saisir un nom"));
}

function random(){
    if(tab.length>0){
        let rand = Math.floor(Math.random()*tab.length);//Math. random( )envoi un nombre flottant psevdo alletoir ntre (o;1)
        alert("Le gagnant est :"+tab[rand]);
    }

    else alert("Ajouter 1 nom au minimum");
}