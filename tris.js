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
	if (v)
		alert('Gioco finito');
	else{
		element = document.getElementById(id);
		if (giocatore[0].turn)
			i = 0;
		else 
			i = 1;
		cell = giocatore[i].cell;
		if (element.innerHTML == ''){ 
			element.innerHTML = giocatore[i].sign;
			cell.push(id);
			giocatore[i].turn = false;
			giocatore[Math.abs(i-1)].turn = true;
			if (cell.length >= 3)
				check_tris();
			if ((cell.length == 5) && !v)
				alert('Non ha vinto nessuno');
		}
	}
}
function check_tris(){
	var idvect = giocatore[i].cell;
	if ((/1/.test(idvect) && /2/.test(idvect) && /3/.test(idvect))
		|| (/1/.test(idvect) && /4/.test(idvect) && /7/.test(idvect))
		|| (/1/.test(idvect) && /5/.test(idvect) && /9/.test(idvect))
		|| (/2/.test(idvect) && /5/.test(idvect) && /8/.test(idvect))
		|| (/3/.test(idvect) && /6/.test(idvect) && /9/.test(idvect))
		|| (/4/.test(idvect) && /5/.test(idvect) && /6/.test(idvect))
		|| (/7/.test(idvect) && /8/.test(idvect) && /9/.test(idvect))
		|| (/3/.test(idvect) && /5/.test(idvect) && /7/.test(idvect))){
		setTimeout(function() {alert ('hai vinto!')},200);
		v = true;
	}


}
