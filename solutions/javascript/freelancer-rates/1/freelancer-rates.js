// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  /*Algo
  - get months = numDays/22;
  - multiply months by discount to get finalDiscount
  - (REMEMBER how discounts are mutliplied from a total
  - and then subtracted from it to get final amount)
  CORRECTION!CORRECTION!:CORRECTION!:CORRECTION!::
  - discount is calculated after every 22 billable days
  OR RATHER - PER 22 billable days, so
   - 1) calculate total amount per 22 billable day block, then
   - 2) apply the discount to THIS value (as opposed to multiplying
   the discount rate by the number of months)
   - 3) now multiply (2) by number of months
   - 4) the remaining days to be billed as well
   - 5) finally, return (4) + (3)
  */
  
  console.log("ratePerHour:" + ratePerHour);
  console.log("numDays:" + numDays);
  console.log("discount:" + discount);

  // 1)
  let totalBillable = 22 * dayRate(ratePerHour);
  console.log("totalBillable: " + totalBillable);
  // 2) discount from totalBillable
  let monthlyAmount = totalBillable - (totalBillable * discount);
  console.log("monthlyAmount: " + monthlyAmount);

  // 3) multiply discounted monthly amount by full months
  let months = Math.floor(numDays/22);/*CORRECTION:
                            using the amount with it's REMAINDER
                            ALREADY factors the remaining days - hence
                            we get the expected amount without adding
                            remaingDays
                            FIX:
                             use Math.floor()*/ 
  console.log("months:" + months);
  let totalMonthlyBill = monthlyAmount * months;
  console.log("totalMonthlyBill:" + totalMonthlyBill);
  
  // 4) remaining days billable by dayRate(ratePerHour)
  let remainingDaysBill = (numDays%22) * dayRate(ratePerHour);
  console.log("remainingDaysBill:" + remainingDaysBill);
  // 5)
  return Math.ceil(totalMonthlyBill + remainingDaysBill);
} 
