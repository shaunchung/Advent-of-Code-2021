let sonar = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let incre = 0;
let sumIncre = 0;
for (let i in sonar) {
  if (sonar[i] > sonar[i - 1]) {
    // console.log("sonar[i]: " + sonar[i] + " sonar[i-1]: " + sonar[i - 1]);
    incre++;
  }
  if (sonar[i] > sonar[i - 2]) {
    sumIncre++;
  }
}
console.log("incre: " + incre);
console.log("sumIncre: " + sumIncre);

fetch("/input.txt", { mode: "no-cors" })
  .then((response) => response.text())
  .then((data) => {
    //console.log(typeof data);
    //console.log(data[4]);
    numbers = data.split("\n").map(Number);
    let ans = 0;
    let ans2 = 0;
    for (let i in numbers) {
      if (numbers[i] > numbers[i - 1]) {
        // console.log(
        //   "numbers[i]: " + numbers[i] + " numbers[i-1]: " + numbers[i - 1]
        // );
        ans++;
      }
      if (numbers[i] > numbers[i - 3]) {
        ans2++;
      }
    }
    console.log("ans:" + ans);
    console.log("ans2:" + ans2);
  })
  .catch((error) => console.error(error));
