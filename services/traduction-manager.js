const traduceService = {
  flatten(object, object_trans) {
    const newTrad = traduceService.read(object, [], object_trans).flat(50)
    newTrad.forEach(object => object.trad = "" /* object.translation */ )
    return newTrad
  },
  read(object, prevKey = [], object_trans) {
    return Object.keys(object).map(key => {
      if (typeof object[key] === "string") {
        return { key: [...prevKey, key], value: object[key] /*, translation: object_trans === undefined ? "" : object_trans[key] */ }
      } else {
        return traduceService.read(object[key], [...prevKey, key] /*, object_trans[key] */)
      }
    })
  },
  reconstruct(array) {
    const object = {}
    array.forEach(tradObject => {
      const lastKey = tradObject.key[tradObject.key.length-1]
      const lastObject = tradObject.key.reduce((prev, curr) => {
        if (!prev[curr]) {
          prev[curr] = {}
        }
        return prev[curr]
      }, object)
      lastObject[lastKey] = tradObject.trad
    })
    return object
  }
}
export default traduceService
