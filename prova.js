const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

//Object.values(object1).forEach(x=>{console.log('ciao ' + x)});

let text = ""
for (let i = 0; i < 5; i++) {
  text = "The number is " +(Object.values(object1).length - i);
  console.log(text)
}

