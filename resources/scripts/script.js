const chiefKeef = {
  quotes: [' Keep this s*** one hunna, I keep this s*** three hunna. I pull up in that Audi, you pull up in that Honda.',
    'Ain\’t nobody surf — everybody try to skateboard, referring to rappers like Lil Wayne and Lupe Fiasco. It\’ll be cool. It\’s a hobby.',
    'I got away from all the unnecessary trouble, drama, problems. I came out here to where it\’s better life-wise, living. It\’s better out here than Chicago because I get in so much trouble. It\’s crazy, but I like living out here. I think it improved me and changed me to stay and go somewhere bigger from here.',
    'There ain\’t gonna be nothing the same. I\’m gonna try to go another way. I like to keep going different ways and keep it the same. I don\’t copy. I come up with my own stuff, my own everything',
    'We are all in the gutter, but some of us are looking at the stars.',
    'I come up on the scene, and I\’m stealing light. B**** I\’m high off life, got me feeling right.',
    'I\’m glad to be someone that people listen to and look up to. I\’m glad that I can help change the situations and the scenery in Chicago… and I love my city still but it is crazy.',
    'I\’m with the stop the violence campaign, that\’s why I paintball now.',
    'I firmly believe the world will sort itself out in the end. Believe it with me. At least none of us will be around to be proven wrong.',
    'I used to know how to draw and do art. When I was 7 years-old, I learned how to draw. I stopped when I was about 10 or 11, and started going into the streets, trippin. That\’s why I still love art to this day. I love art. I don\’t know how to do it no more. I can do a little something. I can color. I think it\’s a way to express myself through pictures, pictures of me, all pictures of me. I love art.'],
  adLibs: ['Bang', 'Bang Bang', '300', 'Nah', 'O\'Block', 'Aye', 'Let\'s Get It',
    'Skudda skuh', 'Doo doo doo', 'Skrrt', 'Skr skr skrrt', 'Woo', 'Woo Woo', 'Gang Gang',
    'GBE Baby', 'Sosa Baby', 'Gang in this bitch', 'Squad']
}

let randomQuote = chiefKeef.quotes[Math.floor(Math.random() * chiefKeef.quotes.length)];
let randomAdLib = chiefKeef.adLibs[Math.floor(Math.random() * chiefKeef.adLibs.length)];

let getRandomMessage = () => {
  let message = '';
  message = `<p>Chief Keef says: ${randomQuote} ${randomAdLib}</p>`;
  return message
}

console.log(getRandomMessage());

let randomMessage = getRandomMessage();
