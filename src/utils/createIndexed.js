function createIndexed(data = "") {
  const lower = data.toLowerCase();
  const splitted = lower.split("\n\n");
  const parsed = splitted.filter(val => !!val);
  const obj = {};
  for (let i = 0; i < parsed.length; i++) {
    // Removing unnecessary punctuations and splitting the string
    let para = parsed[i].replace(/[^A-z0-9_]+/g, " ").split(" ");
    for (let j = 0; j < para.length; j++) {
      // console.log(para[j]);
      if (para[j].length) {
        if (obj[para[j]] && obj[para[j]].indexOf(i) === -1) {
          obj[para[j]].push(i);
        } else {
          obj[para[j]] = [i];
        }
      }
    }
  }
  return {
    para: parsed,
    indexed: obj
  };
}

export default createIndexed;
