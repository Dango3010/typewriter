const sentence = "today is a duck";

// Animation: Delaying Each Character Separately:
let time = 0;
for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
    setTimeout(() => {
      console.log(sentence[i]);
    }, time);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]); //print all characters in one line
    }, time); //all the characters appear at once, one second after the program is run.
    time += 50;
  }
}
