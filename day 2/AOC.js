fetch("/input.txt", { mode: "no-cors" })
  .then((response) => response.text())
  .then((data) => {
    str = data.split("\n");
    let horizontal = 0;
    let depth = 0;
    for (let i in str) {
      if (str[i].match(/forward/)) {
        horizontal += Number(str[i].slice(-1));
      } else if (str[i].match(/down/)) {
        depth = depth + Number(str[i].slice(-1));
      } else if (str[i].match(/up/)) {
        depth = depth - Number(str[i].slice(-1));
      }
    }
    console.log("First ans:" + horizontal * depth);
  })
  .catch((error) => console.error(error));

//let str = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];
fetch("/input.txt", { mode: "no-cors" })
  .then((response) => response.text())
  .then((data) => {
    str = data.split("\n");
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for (let i in str) {
      if (str[i].match(/down/)) {
        aim = aim + Number(str[i].slice(-1));
      } else if (str[i].match(/up/)) {
        aim = aim - Number(str[i].slice(-1));
      } else if (str[i].match(/forward/)) {
        horizontal += Number(str[i].slice(-1));
        depth = depth + aim * Number(str[i].slice(-1));
      }
    }
    console.log("Second ans:" + horizontal * depth);
  })
  .catch((error) => console.error(error));
