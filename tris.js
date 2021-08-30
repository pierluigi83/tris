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