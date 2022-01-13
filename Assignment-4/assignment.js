const sayHello = (name) => {
  console.log('f1')
  console.log('Hi ' + name);
}

const sayHello2 = (name, phrase='Hi') => {
  console.log('f2')
  console.log(`${phrase} ${name}`);
}

const sayHello3 = () => {
  console.log('f3')
  console.log('Hi Adam');
}

const sayHello4 = (name) => {
  console.log('f4')
  console.log('value returned');
  const s = `Hi ${name}`;
  return s;
}

function checkInput(sayHello, ...values){
  console.log('inside checkInput');
  for(const el of values){
    if(!el){
      console.log('check input broken');
      return;
    }
  }
  sayHello();
}

sayHello('Adam');
sayHello2('Adam', 'Bye');
sayHello2('Adam');
sayHello3();
const ret = sayHello4('Adam');
console.log(ret);
let checker = '';
checkInput(sayHello3, 'hey', 'hello', 'agafadga');
checkInput(sayHello3, 'rajduj', '');