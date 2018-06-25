//This function	Information about pokemon 

var PokemonInfo =function(name){
	var flag=0;
  for( var x in pokemonList.pokemon){
    if(pokemonList.pokemon[x].name==name)  
      	{console.log(pokemonList.pokemon[x]); //display info of an pokemon on console
    	flag=1;}
 	}
 	if(flag==0)
 		console.log("not a valid input")  
}
var ll= function(){
	var name = prompt('Enter the name of Pokemon') //take input from the user
PokemonInfo(name);}  //functon calling


// This function will give the name of a pokemon who have that weakness

var weaknessInfo = function(weak){
	var flag=0;
    for(x in pokemonList.pokemon)
      for(var y in pokemonList.pokemon[x].weaknesses) 
         if(pokemonList.pokemon[x].weaknesses[y] == weak){
            	console.log(pokemonList.pokemon[x].name);  //display name of pokemon on console
     			flag=1;
     		}

     if(flag==0)
     	console.log("not a valid input")
 }

var ll2= function(){
var x1 = prompt("Enter Weakness")
weaknessInfo(x1);}  //function calling


//This function will show which all pokemon have name in their next_Evlution

var evoluation = function(namew){
	var flag=0;
	for(x in pokemonList.pokemon){
			for(z in pokemonList.pokemon[x].next_evolution){
				if(namew == pokemonList.pokemon[x].next_evolution[z].name){
					console.log(pokemonList.pokemon[x].name); 
					flag=1;
				}
			}
	}
				if(flag==0)
			console.log("not a valid input");
			
		
	}
						


var ll3= function(){
var x2=prompt("enter name"); // take input from user in prompt
evoluation(x2);    // function calling
} 
