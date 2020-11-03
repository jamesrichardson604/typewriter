const sentence = "hello there from lighthouse labs";

let delay = 1000

for (let i = 0; i < sentence.length; i++) {
  delay += 50
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if(i === sentence.length - 1){
      process.stdout.write('\n')
    }
  }, delay)
}
