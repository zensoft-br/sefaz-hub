function deepSort(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepSort);
  } else if (obj && typeof obj === "object" && obj.constructor === Object) {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = deepSort(obj[key]);
        return acc;
      }, {});
  }
  return obj;
}