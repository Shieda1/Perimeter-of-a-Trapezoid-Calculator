// https://calculator.swiftutors.com/perimeter-of-a-trapezoid-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofaTrapezoidRadio = document.getElementById('perimeterofaTrapezoidRadio');
const lengthaRadio = document.getElementById('lengthaRadio');
const lengthbRadio = document.getElementById('lengthbRadio');
const lengthcRadio = document.getElementById('lengthcRadio');
const lengthdRadio = document.getElementById('lengthdRadio');

let perimeterofaTrapezoid;
let lengtha = v1;
let lengthb = v2;
let lengthc = v3;
let lengthd = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

perimeterofaTrapezoidRadio.addEventListener('click', function() {
  variable1.textContent = 'Length a';
  variable2.textContent = 'Length b';
  variable3.textContent = 'Length c';
  variable4.textContent = 'Length d';
  lengtha = v1;
  lengthb = v2;
  lengthc = v3;
  lengthd = v4;
  result.textContent = '';
});

lengthaRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Trapezoid';
  variable2.textContent = 'Length b';
  variable3.textContent = 'Length c';
  variable4.textContent = 'Length d';
  perimeterofaTrapezoid = v1;
  lengthb = v2;
  lengthc = v3;
  lengthd = v4;
  result.textContent = '';
});

lengthbRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Trapezoid';
  variable2.textContent = 'Length a';
  variable3.textContent = 'Length c';
  variable4.textContent = 'Length d';
  perimeterofaTrapezoid = v1;
  lengtha = v2;
  lengthc = v3;
  lengthd = v4;
  result.textContent = '';
});

lengthcRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Trapezoid';
  variable2.textContent = 'Length a';
  variable3.textContent = 'Length b';
  variable4.textContent = 'Length d';
  perimeterofaTrapezoid = v1;
  lengtha = v2;
  lengthb = v3;
  lengthd = v4;
  result.textContent = '';
});

lengthdRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Trapezoid';
  variable2.textContent = 'Length a';
  variable3.textContent = 'Length b';
  variable4.textContent = 'Length c';
  perimeterofaTrapezoid = v1;
  lengtha = v2;
  lengthb = v3;
  lengthc = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofaTrapezoidRadio.checked)
    result.textContent = `Perimeter of a Trapezoid = ${computePerimeterofaTrapezoid().toFixed(2)}`;

  else if(lengthaRadio.checked)
    result.textContent = `Length a = ${computeLengtha().toFixed(2)}`;

  else if(lengthbRadio.checked)
    result.textContent = `Length b = ${computeLengthb().toFixed(2)}`;

  else if(lengthcRadio.checked)
    result.textContent = `Length c = ${computeLengthc().toFixed(2)}`;

  else if(lengthdRadio.checked)
    result.textContent = `Length d = ${computeLengthd().toFixed(2)}`;
})

// calculation

function computePerimeterofaTrapezoid() {
  return Number(lengtha.value) + Number(lengthb.value) + Number(lengthc.value) + Number(lengthd.value);
}

function computeLengtha() {
  return Number(perimeterofaTrapezoid.value) - Number(lengthb.value) - Number(lengthc.value) - Number(lengthd.value);
}

function computeLengthb() {
  return Number(perimeterofaTrapezoid.value) - Number(lengtha.value) - Number(lengthc.value) - Number(lengthd.value);
}

function computeLengthc() {
  return Number(perimeterofaTrapezoid.value) - Number(lengtha.value) - Number(lengthb.value) - Number(lengthd.value);
}

function computeLengthd() {
  return Number(perimeterofaTrapezoid.value) - Number(lengtha.value) - Number(lengthb.value) - Number(lengthc.value);
}