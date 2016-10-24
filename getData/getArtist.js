discoApp.getCandiStaton = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'candi staton',
			type: 'artist',
		}
	})	
};

discoApp.getDonnaSummer = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'donna summer',
			type: 'artist',
		}
	})	
};

discoApp.getJamiroquai = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'jamiroquai',
			type: 'artist',
		}
	})	
};

discoApp.getDeelicious = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'deelicious',
			type: 'artist',
		}
	})	
	
};

discoApp.getTomTrago = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'tom trago',
			type: 'artist',
		}
	})	
	
};

discoApp.getDaftPunk = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'daft punk',
			type: 'artist',
		}
	})	
};

discoApp.getFouk = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q: 'fouk',
			type: 'artist',
		}
	})	
};

discoApp.getEarthWindFire = function(){
	return $.ajax({
		url: 'https://api.spotify.com/v1/search',
		method: 'GET',
		dataType: 'json',
		data: {
			q:'earth, wind, & fire',
			type: 'artist',
		}
	})	
};


	$.when(discoApp.getCandiStaton(),discoApp.getDonnaSummer(),
		discoApp.getJamiroquai(), discoApp.getDeelicious(), 
		discoApp.getTomTrago(), discoApp.getDaftPunk(), 
		discoApp.getDaftFouk(), discoApp.getEarthWindFire())
		.then(function(CandiStaton, DonnaSummer, Jamiroquai, 
			Deelicious, DaftPunk, TomTrago, Fouk, EarthWindFire {
			console.log(CandiStaton);
			console.log(DonnaSummer);
			console.log(Jamiroquai);
			console.log(Deelicious);
			console.log(DaftPunk);
			console.log(TomTrago);
			console.log(Fouk);
			console.log(EarthWindFire);


		});


