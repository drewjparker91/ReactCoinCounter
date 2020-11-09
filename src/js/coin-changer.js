// export const ourCoinCounter = (money) => {
//   const quarterTotal = Math.floor(money / 0.25);
//   const dimeTotal = Math.floor(money % 0.25 / 0.10)
//   const nickelTotal = Math.floor(money % 0.25 % 0.1 / 0.05)
//   const pennyTotal = Math.floor(money % 0.25 % 0.1 % 0.05 / 0.01);
//   // return `${quarterTotal} quarters, ${dimeTotal} dimes, ${nickelTotal} nickels, ${pennyTotal} pennies`;
//   return quarterTotal;
// }

export const coinCount = (amount, quarterCount, dimeCount, nickelCount, pennyCount) => {
  if (Math.floor(amount / 0.25) >= 1) { 
    const quarts = Math.floor(amount / 0.25);
    const newAmount = amount % 0.25;
    return coinCount(newAmount, quarts, dimeCount, nickelCount, pennyCount);
  } else if (Math.floor(amount / 0.1) >= 1) {
    const dimes = Math.floor(amount / 0.1);
    const newAmount = amount % .1;
    return coinCount(newAmount, quarterCount, dimes, nickelCount, pennyCount);
  } else if (Math.floor(amount / .05) >= 1) {
    const nickels = Math.floor(amount / .05);
    const newAmount = amount % .05;
    return coinCount(newAmount, quarterCount, dimeCount, nickels, pennyCount);
  } else if (Math.floor(amount / .01) >= 1) {
    const pennies = Math.floor(amount / 0.01)
    const newAmount = amount % .01;
    return coinCount(newAmount, quarterCount, dimeCount, nickelCount, pennies);
  } else {
    if (!quarterCount) {quarterCount = 0;}
    if (!dimeCount) {dimeCount = 0;}
    if (!nickelCount) {nickelCount = 0;}
    if (!pennyCount) {pennyCount = 0;}
    return [quarterCount, dimeCount, nickelCount, pennyCount];
  }
}

export function getChange(userAmount) {
  const coinCounter = (coinValue) => {
    return (amount) => {
      return Math.floor(amount / coinValue);
    }
  }
  
  const quarterCounter = coinCounter(0.25);
  const dimeCounter = coinCounter(0.10);
  const nickelCounter = coinCounter(0.05);
  const pennyCounter = coinCounter(0.01);

  const x = quarterCounter(userAmount);
  const y = dimeCounter(userAmount - x * 0.25)
  const z = nickelCounter(userAmount - x * 0.25 - y * 0.1)
  const alpha = pennyCounter(userAmount - x * 0.25 - y * 0.1 - z * 0.05)
  return `You would get ${x} quarters, ${y} dimes, ${z} nickels, and ${alpha} pennies.`;
}

// function coinCounter(coinValue, amount) {
//   return amount / coinValue;
// }

// const quarterCounter = coinCounter(25, amount);
// const dimeCounter = coinCounter(10, amount);
// const nickelCounter = coinCounter(5, amount);
// const pennyCounter = coinCounter(1, amount);

// function getChange(userAmount) {
//   return quarterCounter = (userAmount) => {
//     userAmount - quarterCounter;
//     return dimeCounter => {
//       return nickelCounter => {
//         return pennyCounter => {
//           return `You would get ${quarterCounter} quarters, ${dimeCounter} dimes, ${nickelCounter} nickels, and ${pennyCounter} pennies.`;
//         }
//       }
//     }
//   }
// }