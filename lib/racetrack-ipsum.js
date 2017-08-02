/**
 * racetrack-ipsum.js
 *
 * quickly generates random text from names of race tracks.
 */

// FIXME: pull this from a text file so other's can contribute and use their own
var trackList = [
  "Laguna Seca",
  "Sears Point", 
  "Thunderhill",
  "Nürburgring Nordschleife",
  "Circuit de la Sarthe",
  "Circuit de Spa-Francorchamps", 
  "Circuit de Monaco",
  "Mount Panorama",
  "Hockenheimring",
  "Monza",
  "Silverstone",
  "Suzuka"
];

// FIXME: switch on tracks and manufacturers
var manufacturerList = [
  "Acura",
  "Alfa Romeo",
  "Ariel",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Citroën",
  "Chrysler",
  "Daihatsu",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Genesis",
  "Ginetta",
  "GMC",
  "Holden",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Isuzu",
  "Jaguar",
  "Jeep",
  "Karma",
  "Koenigsegg",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MG",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Nissan",
  "Noble",
  "Opel",
  "Pagani",
  "Panoz",
  "Peugeot",
  "Plymouth",
  "Porsche",
  "Radical",
  "Renault",
  "Rolls-Royce",
  "Saleen",
  "SEAT",
  "Skoda",
  "Smart",
  "Spyker",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "TVR",
  "Vauxhall",
  "Vector",
  "Volkswagen",
  "Volvo"
]

var racetrackIpsum = function() {
  var options = (arguments.length) ? arguments[0] : {};
  var count   = options.count  || 4; 
  var unit    = options.unit   || 'paragraphs';
  var asHtml  = options.asHtml || false;

  if (asHtml) {
    openingPTag = '<p>';
    closingPTag = '</p>';
  }

  var randomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var randomManufacturer = function() {
    return manufacturerList[randomInteger(0, manufacturerList.length - 1)].toLowerCase(); 
  };

  var randomSentence = function() {
    var sentence = '';

    // assemble a sentence of random track names
    for (var i = 0; i < 10; i++) {
      sentence = sentence + ' ' + randomManufacturer();
    };

    // capitalize the first letter
    if (sentence.length) {
      sentence = sentence.slice(1);
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    }

    return sentence;
  }

  var randomParagraph = function() {
    var paragraph = randomSentence();
    var sentenceCount = randomInteger(2, 5);

    // assemble a paragraph from 3 to 6 sentences long separated by periods
    for (var i = 0; i < sentenceCount; i++) {
      paragraph = paragraph + ' ' + randomSentence();
    };

    return paragraph;
  }

  var ipsum = '';
  var eol   = require('os').EOL;

  for (var i = 0; i < count; i++) {
    switch(unit) {
      case 'words':
        ipsum = ipsum + randomManufacturer() + ' ';
        break;
      case 'sentences':
        ipsum = ipsum + randomSentence() + ' ';
        break;
      case 'paragraphs':
        if (asHtml) {
          ipsum = ipsum + openingPTag + randomParagraph() + closingPTag + eol;
        } else {
          ipsum = ipsum + randomParagraph() + eol + eol;
        }
        break;
    }
  }

  return ipsum;
};

module.exports = racetrackIpsum;