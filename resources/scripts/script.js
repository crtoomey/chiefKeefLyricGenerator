const chiefKeef = {
  quotes: ['The unexamined life is not worth living.',
    'Whereof one cannot speak, thereof one must be silent.',
    'Entities should not be multiplied unnecessarily.',
    'The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short.',
    'I think therefore I am (Cogito, ergo sum).',
    'He who thinks great thoughts, often makes great errors.',
    'We live in the best of all possible worlds.',
    'What is rational is actual and what is actual is rational.',
    'God is dead! He remains dead! And we have killed him.',
    'There is but one truly serious philosophical problem, and that is suicide.',
    'One cannot step twice in the same river.',
    'The greatest happiness of the greatest number is the foundation of morals and legislation.',
    'To be is to be perceived (Esse est percipi).',
    'Happiness is not an ideal of reason but of imagination.',
    'No man\'s knowledge here can go beyond his experience.',
    'God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us.',
    'Liberty consists in doing what one desires.',
    'It is undesirable to believe a proposition when there is no ground whatever for supposing it true.',
    'Even while they teach, men learn.',
    'There is only one good, knowledge, and one evil, ignorance.',
    'If God did not exist, it would be necessary to invent Him.',
    'This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities.',
    'One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another.',
    'Leisure is the mother of philosophy.',
    'Philosophy is a battle against the bewitchment of our intelligence by means of language.',
    'There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers.',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    'Only one man ever understood me, and he didn’t understand me.',
    'The mind is furnished with ideas by experience alone.',
    'Life must be understood backward. But it must be lived forward.',
    'Science is what you know. Philosophy is what you don\'t know.',
    'Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck.',
    'Philosophy is at once the most sublime and the most trivial of human pursuits.',
    'History is Philosophy teaching by examples.',
    'He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god.',
    'You can discover more about a person in an hour of play than in a year of conversation.',
    'Things alter for the worse spontaneously, if they be not altered for the better designedly.',
    'All that is necessary for the triumph of evil is that good men do nothing.',
    'Is man merely a mistake of God\'s? Or God merely a mistake of man\'s?',
    'I would never die for my beliefs because I might be wrong.',
    'Religion is the sign of the oppressed ... it is the opium of the people.',
    'Happiness is the highest good.',
    'If men were born free, they would, so long as they remained free, form no conception of good and evil.',
    'The greater the difficulty, the more glory in surmounting it.',
    'Whatever is reasonable is true, and whatever is true is reasonable.',
    'Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness.',
    'Man is condemned to be free.',
    'It is one thing to show a man that he is in error, and another to put him in possession of truth.',
    'I don\’t know why we are here, but I\’m pretty sure it is not in order to enjoy ourselves.',
    'That man is wisest who, like Socrates, realizes that his wisdom is worthless.',
    'The only thing I know is that I know nothing.',
    'All is for the best in the best of all possible worlds.',
    'The function of prayer is not to influence God, but rather to change the nature of the one who prays.',
    'Man is born free, but is everywhere in chains.',
    'Man will never be free until the last king is strangled with the entrails of the last priest.',
    'If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.',
    'Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative.',
    'I can control my passions and emotions if I can understand their nature.',
    'Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it.',
    'It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence.',
    'Virtue is nothing else than right reason.',
    'Freedom is secured not by the fulfilling of one\'s desires, but by the removal of desire.',
    'In everything, there is a share of everything.',
    'A little philosophy inclineth man\'s mind to atheism; but depth in philosophy bringeth men\'s minds about to religion.',
    'The brave man is he who overcomes not only his enemies but his pleasures.',
    'Good and evil, reward and punishment, are the only motives to a rational creature.',
    'To do as one would be done by, and to love one\'s neighbor as oneself, constitute the ideal perfection of utilitarian morality.',
    'Everything that exists is born for no reason, carries on living through weakness, and dies by accident.',
    'Man is the measure of all things.',
    'We are too weak to discover the truth by reason alone.',
    'The mind is furnished with ideas by experience alone.'
    ],
  adLibs: ['Bang', 'Bang Bang', '3 Hunna', 'Nah', 'O\'Block', 'Aye', 'Let\'s Get It',
    'Skrrt', 'Skr skr skrrt', 'Woo', 'Woo Woo', 'Gang Gang',
    'GBE Baby', 'Sosa Baby', 'Gang in this bitch', 'Squad']
}

let randomQuote = chiefKeef.quotes[Math.floor(Math.random() * chiefKeef.quotes.length)];
let randomAdLib = chiefKeef.adLibs[Math.floor(Math.random() * chiefKeef.adLibs.length)];

let getRandomMessage = () => {
  let message = '';
  message = `<p>${randomQuote} ${randomAdLib}! <br> <em>-Chief Keef</em> </p>`;
  return message;
  ;
}

console.log(getRandomMessage());

let randomMessage = getRandomMessage();

const addRandomMessage = () => {
  document.getElementById('output').insertAdjacentHTML('beforeend', randomMessage);
  document.getElementById("button").disabled = true;
  document.getElementById("resetButton").disabled = false;
}

const refreshPage = () => {
  document.location.reload(true);
}

const addMobileRandomMessage = () => {
  document.getElementById('output').insertAdjacentHTML('beforeend', randomMessage);
  document.getElementById("mobileButton").disabled = true;
  document.getElementById("mobileResetButton").disabled = false;
}