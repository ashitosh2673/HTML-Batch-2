const message = "Hey Hello Friends this is a message from module.js file";

const promptBox = () => {
  let name = prompt("Enter your name  ====>>>>");
  alert(`Welcome ${name}`);
};

export { message, promptBox };
