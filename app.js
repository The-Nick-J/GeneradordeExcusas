
const who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  document.getElementById('excuse').innerText = excuse;
}
