const randomNumber = Math.random() * 100;
const roundedRandomNumber = Math.floor(randomNumber);

if (roundedRandomNumber <= 50) {
  alert(
    `the number is smaller or equal to 50 and the number is ${roundedRandomNumber}`
  );
} else {
  alert(
    `the number is larger than 50 and the number is ${roundedRandomNumber}`
  );
}
