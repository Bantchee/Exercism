// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export let timeToMixJuice = name => {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export let limesToCut = (wedgesNeeded, limes) => {
  let limeCount = 0;
  let wedgeCount = 0;

  if(wedgesNeeded === 0 || limes.length === 0) {
    return limeCount;
  }

  while(wedgeCount < wedgesNeeded) {
    console.log(wedgeCount, wedgesNeeded, limeCount);
    switch(limes.shift()) {
      case 'small':
        wedgeCount += 6;
        break;
      case 'medium':
        wedgeCount += 8;
        break;
      case 'large':
        wedgeCount += 10;
        break;
    }

    limeCount++;

    if(limes.length === 0) {
      break;
    }
  }

    console.log(limeCount);
  return limeCount;
}



/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }

  return orders;
}
