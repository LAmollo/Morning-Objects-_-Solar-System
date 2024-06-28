// The Solar System, part 1
 

const solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
    ];
    
// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
console.log("Jupiter's moons:", solarSystem.find(planet => planet.name === "Jupiter").moons);

// 2. Print the name of Neptune's moon "Nereid" to the console.
const neptuneMoons = solarSystem.find(planet => planet.name === "Neptune").moons;
console.log("Neptune's moon Nereid:", neptuneMoons.find(moon => moon === "Nereid"));

// 3. Add a new moon called "Endor" to Venus' moons array.
const venus = solarSystem.find(planet => planet.name === "Venus");
venus.moons.push("Endor");

// 4. Add a Pluto object to the solarSystem array using .push. 
//The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
const pluto = { name: "Pluto", ringSystem: false, moons: ["Charon"] };
solarSystem.push(pluto);

// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', 
//and the value should be Earth's diameter in miles represented as a string.
const earth = solarSystem.find(planet => planet.name === "Earth");
earth.diameter = "7917 miles";


