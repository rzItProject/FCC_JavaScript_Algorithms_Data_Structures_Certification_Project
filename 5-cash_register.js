/**
 * Cash Register
*/

// V1 - First code

function checkCashRegister(price, cash, cid) {
  let status = ["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"];
  let currency = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }
  let result = { status: "", change: [] };
  let diff = cash - price;

  let getCurrencyValue = (obj, key) => {
    return Object.values(obj).find(value => obj[key] === value);
  }

  let getTotal = (arr) => {
    return arr.reduce((acc, value) => {
      let res = parseFloat((acc + value[1]).toFixed(2));
      return res;
    }, 0);
  }

  let totalCashDrawer = getTotal(cid);

  if (totalCashDrawer < diff) {
    result.status = status[0];
  } else if ((totalCashDrawer === diff) || (price === cash)) {
    result.status = status[1];
    result["change"] = cid;
  } else {
    let change = cid.slice().reverse().reduce((acc, value) => {
      let currentCurrency = getCurrencyValue(currency, value[0]);
      let amountCurrency = value[1];
      let cpt = 0;
      while (diff >= currentCurrency && amountCurrency) {
        diff = (diff - currentCurrency).toFixed(2);
        amountCurrency -= currentCurrency;
        cpt++;
      }
      if (cpt != 0) {
        acc.push([value[0], cpt * currentCurrency]);
        cpt = 0;
      }
      return acc;
    }, []);
    if (getTotal(change) < diff) {
      result.status = status[0];
    } else {
      result.status = status[2];
      result["change"] = change;
    }
  }
  return result;
}

console.log(checkCashRegister(20, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

