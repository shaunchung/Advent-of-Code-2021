let report = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];
let now, sum;
for (let i in report) {
  if (i == 0) {
    sum = report[i].split("").map(Number);
    continue;
  }
  now = report[i].split("").map(Number);
  sum = now.map((a, i) => a + sum[i]);
}
let gamma = "";
let epsilon = "";
for (let i in sum) {
  sum[i] > report.length / 2
    ? ((gamma += 1), (epsilon += 0))
    : ((gamma += 0), (epsilon += 1));
}
console.log(gamma + " " + parseInt(gamma, 2));
console.log(epsilon + " " + parseInt(epsilon, 2));
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));

fetch("/input.txt", { mode: "no-cors" })
  .then((response) => response.text())
  .then((data) => {
    report = data.split("\n");
    let now, sum;
    for (let i in report) {
      if (i == 0) {
        sum = report[i].split("").map(Number);
        continue;
      }
      now = report[i].split("").map(Number);
      sum = now.map((a, i) => a + sum[i]);
    }
    let gamma = "";
    let epsilon = "";
    for (let i in sum) {
      sum[i] > report.length / 2
        ? ((gamma += 1), (epsilon += 0))
        : ((gamma += 0), (epsilon += 1));
    }
    console.log(gamma + " " + parseInt(gamma, 2));
    console.log(epsilon + " " + parseInt(epsilon, 2));
    console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
    console.log(report[1]);
  })
  .catch((error) => console.error(error));
