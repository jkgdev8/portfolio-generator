const profileDataArgs = process.argv.slice(2, process.argv.length);
const commandLineArgs = process.argv;
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
    });
  };

printProfileData(profileDataArgs);


const message = 'Hello Node!';

if (true === true) {
  const message = 'Hello ES6!';
  let sum = 5;
  sum += 10;
  console.log(message);
  console.log(sum);
}

