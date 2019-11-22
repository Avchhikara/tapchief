export default function search(data, indexed) {
  data = data
    .toLowerCase()
    .replace(/[^A-z0-9_]+/g, " ")
    .split(" ");
  let temp = [];
  let para = indexed.para;
  let index = indexed.indexed;
  for (let ch of data) {
    if (index[ch]) {
      for (let i of index[ch]) {
        if (temp.indexOf(i) === -1) temp.push(i);
      }
    }
  }

  return temp.map(index => para[index]);
}
