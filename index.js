var startingNumber  = 15;

function takeANumber(line) {
 
 
 
  return `Welcome, you are number line.push()  in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }

  const numbersAndNames = [];

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`);
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`;
}
