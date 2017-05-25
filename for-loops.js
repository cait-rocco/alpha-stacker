for(var i = 5; i < 120; i += 10) {
	console.log(i);
}

for(var b = 4096; b >= 1; b/= 2) {
	
	console.log(b);
}

var presidents = ['Washington', 'Lincoln', 'Clinton', 'Bush', 'Obama'];
//var finalPresident = '';
for (a = 0; a < presidents.length; a++) {
	console.log("President #" + (a + 1) + " " + presidents[a]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(`${prop}`);
}