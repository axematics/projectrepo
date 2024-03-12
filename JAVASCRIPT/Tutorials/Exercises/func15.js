// Write your function here:
const toEmoticon = emote => {
  switch (emote) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;
  }
}


// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
