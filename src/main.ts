// Snack 1
const data: unknown = null

if(typeof data === 'string' ){
  console.log(data.toUpperCase());
}else if(typeof data === 'number'){
  console.log(data * 2)
} else if(typeof data === 'boolean'){
  console.log(data ? 'Si' : 'No')
}else if(data === null){
  console.log('Il dato è vuoto');
} else if(Array.isArray(data)){
  console.log(data.length)
} else if(data instanceof Promise){
  data.then((msg) => { console.log(msg) })
} else {
  console.log('Tipo non supportato')
}

