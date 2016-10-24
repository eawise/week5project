var discoApp = {};

discoApp.init = function() {

	$('form').on('submit', function(e){
		e.preventDefault();
		//store the value of what the person selects in the options
		var eraChoice = $('.question1 input[name=era]:checked').val();
		var likeChoice =  $('.question2 input[name=like]:checked').val();
		var danceChoice =  $('.question3 input[name=dance]:checked').val();
			
		//if oldera and easy 
		if ((eraChoice === 'oldera') && (likeChoice === 'easy')){
			discoApp.createPlaylist(discoApp.playlist1)
		}		
		
		//if newera and easy
		else if ((eraChoice === 'newera') && (likeChoice === 'easy')){
			discoApp.createPlaylist(discoApp.playlist3)
		}		

		//if newera and noteasy
		else if ((eraChoice === 'newera') && (likeChoice === 'noteasy')){
			discoApp.createPlaylist(discoApp.playlist2)
		}

		//if oldera and noteasy
		else if ((eraChoice === 'oldera') && (likeChoice === 'noteasy')){
			discoApp.createPlaylist(discoApp.playlist4)
		}
	}); 		

	//page reloads when reset button is clicked
	$('input[type=reset]').on('click', function(){
		location.reload();
	})
}

discoApp.createPlaylist = function(playlist){
	var url = 'https://embed.spotify.com/?uri=spotify:trackset:Do you Disco?:'
	var playlistIds = ''
		playlist.forEach(function(track){
			playlistIds = playlistIds + track.id + ','

		})	
		console.log(playlistIds)
		$('.results').html(`<iframe src="${url + playlistIds}" width="300" height="380">  </iframe>`)
}

$(function() {
	discoApp.init();
})

//oldera-easy
discoApp.playlist1 = [	
	{
		id: "5Vrczz39CvlD3OGCa6utoA",
		name: "Grease",
		type: "track"
	},
	{
		id: "1mqlc0vEP9mU1kZgTi6LIQ",
		name: "September",
		type: "track"
	},
	{
		id: "3MFa9idQuY4iJLWsZl3tIQ",
		name: "Young Hearts Run Free",
		type: "track"
	},
	{
		id: "7zpm7lTY2EZn7AfFm3mGg2",
		name: "Lost in Music",
		type: "track"
	},	
	{
		id: "3n48NtvOovv1UMTA41zxMn",
		name: "Bad Girls",
		type: "track"
	},
	{
		id: "0G3fbPbE1vGeABDEZF0jeG",
		name: "Good times",
		type: "track"
	},
	{
		id: "5IKLwqBQG6KU6MP2zP80Nu",
		name: "We Are Family",
		type: "track"
	},
	{
		id: "3YR6n24EVIU27hnsneZCWf",
		name: "Boogie Wonderland",
		type: "track"
	},
	{
		id: "3gxx3tAwshWt84mvojyyCP",
		name: "Let's Groove",
		type: "track"
	},
	{
		id: "1RtTMm63qkkpjdeYzUncVC",
		name: "Shining Star",
		type: "track"
	},
];

//newera noteasy
discoApp.playlist2 = [
	{
		id: "7rWS1umX04r7zzWnGNDu8w",
		name: "Blind",
		type: "track"
	},
	{
		id: "1LPuLpI2I65UEigpEYSy5P",
		name: "Use Me Again - And Again",
		type: "track"
	},
	{
		id: "0rRCYbLRiHyPVyMoaud21J",
		name: "Lonely Town Lonely Street",
		type: "track"
	},
	{
		id: "66K2mL3WLwgtPYIJpfXsIH",
		name: "Ride In the City",
		type: "track"
	},
	{
		id: "7L0VxcrIr4j2AjTSo9FDxM",
		name: "Not Forgotten",
		type: "track"
	},
	{
		id: "4cNAVxOssXmb8Xl4yZ8QNO",
		name: "Lefty's Bar",
		type: "track"
	},	
	{
		id: "53G2S1Xua07u4S8sKSPSnc",
		name: "Thank You",
		type: "track"
	},
	{
		id: "5NANMUJkT1Npe1ERccHUQG",
		name: "Alright - Alan Braxe and Fred Falke Remix",
		type: "track"
	},
	{
		id: "0qaFkVqWbx3MCXgEogFYre",
		name: "Cocaine Blues",
		type: "track"
	},
];

//newereasy
discoApp.playlist3 = [
	
	{
		id: "4MeOcRREPuDKZsmNSHNfRT",
		name: "Hoo Doo Love",
		type: "track"
	},
	{
		id: "2oX46s90nkZtTbCowHiWVsQ",
		name: "You Give Me Something",
		type: "track"
	},
	{
		id: "0a0KZCfAVPiPs09O6cv4Eo",
		name: "Love Foolosophy - Radio Edit",
		type: "track"
	},
	{
		id: "0RWqE2ZaulvnN1i40qIhDh",
		name: "Canned Heat",
		type: "track"
	},
	{
		id: "6zZmwY5qasaw7QtobXKpZs",
		name: "Virtual Insanity - Remastered",
		type: "track"
	},
	{
		id: "3nrVwwePAYIRzUNH9ig6mO",
		name: "Cosmic Girl - Remastered",
		type: "track"
	},
	{
		id: "0cL0AarTZtfSt5Tc3a2ZDN",
		name: "Alright - Remastered",
		type: "track"
	},
	
	{
		id: "5CMjjywI0eZMixPeqNd75R",
		name: "Lose Yourself to Dance",
		type: "track"
	},
	{
		id: "69kOkLUCkxIZYexIgSG8rq",
		name: "Get Lucky",
		type: "track"
	},
];

//olderanoteast
discoApp.playlist4 = [
	{
		id: "0ACACkoHUwgfgY5CxVIL4N",
		name: "Lovely Day",
		type: "track"
	},
	{
		id: "1jogl9f7HlgoN817JlwqgY",
		name: "Got to give it up",
		type: "track"
	},
	{
		id: "22ff60cZy4APp7bzESHLR8",
		name: "Got to give it up",
		type: "track"
	},

	
];




