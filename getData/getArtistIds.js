discoApp.artists = [
	{
		artist: 'Candi Staton',
		id: '3S34Unhn5yRcaH5K9aU5Et'
	},
	{
		artist: 'Donna Summer',
		id: '2eogQKWWoohI3BSnoG7E2U'
	},
	{
		artist: 'Jamiroquai',
		id: '6J7biCazzYhU3gM9j1wfid'
	},
	{
		artist: 'Deelicious',
		id: '69QvnqfXPkPGcJiZrv0VkV'
	},
	{
		artist: 'Tom Trago',
		id: '2vUpX2Zq1DBdCHuoEnmzkK'
	},
	{
		artist: 'Daft Punk',
		id: '4tZwfgrHOc3mvqYlEYSvVi'
	},
	{
		artist: 'Fouk',
		id: '7CSVLVGfYClzI2061XKrWe'
	},
	{
		artist: 'Earth Wind & Fire',
		id: '4QQgXkCYTt3BlENzhyNETg'
	},
];


discoApp.artists = function(){
	var candiStaton = $.ajax({
		url: 'https://api.spotify.com/v1/artists/3S34Unhn5yRcaH5K9aU5Et/albums',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('candiStaton', candiStaton);
};

discoApp.artists();

discoApp.artists = function(){
	var donnaSummer = $.ajax({
		url: 'https://api.spotify.com/v1/artists/2eogQKWWoohI3BSnoG7E2U/albums',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('donnasummer', donnaSummer);
};

discoApp.artists();

discoApp.artists = function(){
	var jamiroquai = $.ajax({
		url: 'https://api.spotify.com/v1/artists/6J7biCazzYhU3gM9j1wfid/albums',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('jamiroquai', jamiroquai);
};

discoApp.artists();

discoApp.artists = function(){
	var deelicious = $.ajax({
		url: 'https://api.spotify.com/v1/artists/69QvnqfXPkPGcJiZrv0VkV/albums',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('deelicious', deelicious);
};

discoApp.artists();

discoApp.artists = function(){
	var tomTrago = $.ajax({
		url: 'https://api.spotify.com/v1/artists/2vUpX2Zq1DBdCHuoEnmzkK',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('tomTrago', tomTrago);
};

discoApp.artists();

discoApp.artists = function(){
	var daftPunk= $.ajax({
		url: 'https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('daftPunk', daftPunk);
};

discoApp.artists();

discoApp.artists = function(){
	var fouk= $.ajax({
		url: 'https://api.spotify.com/v1/artists/7CSVLVGfYClzI2061XKrWe',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('fouk', fouk);
};

discoApp.artists();

discoApp.artists = function(){
	var earthWindFire= $.ajax({
		url: 'https://api.spotify.com/v1/artists/4QQgXkCYTt3BlENzhyNETg',
		method: 'GET',
		dataType: 'json'
	})	
	console.log('earthWindFire', earthWindFire);
};

discoApp.artists();
