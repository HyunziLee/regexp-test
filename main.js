const str = `
  010-1234-5678
  these@gmail.com
  http://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
  http:localhost:1234
`

console.log(str.match(/\b\w{2,3}\b/g))