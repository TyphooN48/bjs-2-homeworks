"use strict";
function solveEquation(a, b, c) {
  const D = (b**2) - 4 * (a != 0 ? a : 1) * (c != 0 ? c : 1)
  switch (true) {
    case D < 0: return []
    case D == 0: return [-b/(2*a)]
    case D > 0: return [(-b + Math.sqrt(D) )/(2*a), (-b - Math.sqrt(D) )/(2*a)]
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
