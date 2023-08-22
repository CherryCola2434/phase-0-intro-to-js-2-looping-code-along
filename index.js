for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

const cards = "Charlie, Samip, Ali";

function countDown(numbers) {
  let countDown = numbers;
  while (countDown >= 0) {
    console.log(countDown);
    countDown-= 1
  }

  return numbers;
}

countDown(numbers);

function writeCards(surprise, event) {
    const cardsGifts = []
    for (let i = 0; i < surprise.length; i++) {
    cardsGifts.push(`Thank you, ${surprise[i]}, for the wonderful ${event} gift!`)
  }

  return cardsGifts;
}