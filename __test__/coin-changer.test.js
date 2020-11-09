import {coinCount, getChange} from './../src/js/coin-changer.js';

describe('coinCount', ()=> {

  // test('should return money converted to quarters', ()=> {
  //   expect(ourCoinCounter(0.60)).toEqual(2);
  // });

  test('should return money converted to coins', ()=> {
    expect(coinCount(4.99)).toEqual([19, 2, 0, 4]);
  });

  test('should return money converted to coins', ()=> {
    expect(coinCount(0.05)).toEqual([0, 0, 1, 0]);
  });

  test('should return money converted to coins', ()=> {
    expect(getChange(4.99)).toEqual("You would get 19 quarters, 2 dimes, 0 nickels, and 4 pennies.");
  });

});
