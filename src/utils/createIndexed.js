function createIndexed(data = "") {
  const lower = data.toLowerCase();
  const splitted = lower.split("\n\n");
  const parsed = splitted.filter(val => !!val);

  return parsed;
}

export default createIndexed;
