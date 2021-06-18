const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Correct the argu");
  }
};
//if try block thorws error thn catch block runs
try {
  const result = getTip(10);
  console.log(result);
} catch (e) {
  console.log("in catch block");
}
