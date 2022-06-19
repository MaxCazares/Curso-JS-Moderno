// The objects ate define by properties and values
// Properties are those before the colon (:)
// Values are those after the colon (:)
// The values can be any data type

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
}

var myDog = {
    "name": "Cäsar",
    "legs": 3,
    "tails": 0,
    "friends": []
}

// We can call any property of any object
// If any property has a space in the name, we use bracket notation
console.log(myDog.name)
console.log(myDog["legs"])

// We can update any propertie object
myDog.friends = ["FreeCodeCamp Campers"]
console.log(myDog.friends)
console.log(myDog)

// We can add new properties to any object
ourDog.bark = "bow-bow"
console.log(ourDog)

// bracket notation
myDog['bark'] = "woof"
console.log(myDog)

// We can delete any property of any object
delete ourDog.bark
console.log(ourDog)

// We can check any property
function checkObj(prop){
    if(myDog.hasOwnProperty(prop))
        return myDog[prop]
    else
        return "Not Found"
}

console.log(checkObj("name"))

// We can use objects for lookups
function phoneticLookup(val){
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chigago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    return lookup[val]
}
console.log(phoneticLookup("foxtrot"))

// Complex Objects
var myMusic = [
    {
        "artist": "Protest The Hero",
        "title": "Palimsest",
        "release_year": 2020,
        "numberSongs": 13
    },
    {
        "artist": "MegaDeth",
        "title": "Palimsest",
        "release_year": 1990,
        "numberSongs": 13
    }
]
// Accessing Complex Objects
for(let i=0; i<myMusic.length; i++)
    console.log(myMusic[i]["artist"])

console.log(myMusic[0]["title"])

// Accessing Nested Objects
var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
}

console.log(myStorage.car.inside["glove box"])