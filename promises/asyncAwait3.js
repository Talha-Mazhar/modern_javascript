// Call async from non-async

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
// ...what should you write here?
// we need to call async wait() and wait to get 10
// remember, we can't use "await"
// }

// as u knnow async returns a promise so we use .then() to get result 10
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((rsp) => console.log(rsp));
}

f();
