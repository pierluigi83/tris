var giocatore = [{},{}];
giocatore[0].sign = 'X';
giocatore[1].sign = 'O';
giocatore[0].turn = true;
giocatore[1].turn = false;
giocatore[0].cell = new Array();
giocatore[1].cell = new Array();
var i = 0;
var v = false;
function gioco(id){
	if (giocatore[0].turn){ //chi sta giocando?
		i = 0;
	}
	else {
		i = 1;
	}
	if (document.getElementById(id).innerHTML == ''){ // la cella è vuota? alternativamente verifica che non si trovi nei due vettori dei giocatori
		document.getElementById(id).innerHTML = giocatore[i].sign;
		//i += 1;
		// giocatore1.cell[i]  = id;
		giocatore[i].cell.push(id);
		giocatore[i].turn = false;
		giocatore[Math.abs(i-1)].turn = true;
		if (giocatore[i].cell.length >= 3){
			check_tris();
		}
		if ((giocatore[i].cell.length == 5) && !v){
			alert('Non ha vinto nessuno');
		}
	}
}
function check_tris(){
	var idvect = giocatore[i].cell;
	if (/1/.test(idvect) && /2/.test(idvect) && /3/.test(idvect)){
		alert ('hai vinto!');
		v= true;
	}
	if (/1/.test(idvect) && /4/.test(idvect) && /7/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}
	if (/1/.test(idvect) && /5/.test(idvect) && /9/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}
	if (/2/.test(idvect) && /5/.test(idvect) && /8/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}
	if (/3/.test(idvect) && /6/.test(idvect) && /9/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}
	if (/4/.test(idvect) && /5/.test(idvect) && /6/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}
	if (/7/.test(idvect) && /8/.test(idvect) && /9/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}
	if (/3/.test(idvect) && /5/.test(idvect) && /7/.test(idvect)){
		alert ('hai vinto!');
		v = true;
	}


}
