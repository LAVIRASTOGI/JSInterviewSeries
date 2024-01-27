const employee = {
  name: "lavi",
  address: {
    pin: [12, 34, 56],
    locationLive: {
      state: "uttar pradesh",
      city: "lucknow",
    },
  },
  locations: ["mountainview", "beachview"],
};

// lavi-uttarPrdesh-lucknow-56-mountainview;
let {name}=employee;
let {address:{locationLive:{state}}}=employee
let {address:{locationLive:{city}}}=employee
let {address:{pin:[,,pinNo]}}=employee
let {locations:[locationView]}=employee

console.log(`${name}-${state}-${city}-${pinNo}-${locationView}`)

