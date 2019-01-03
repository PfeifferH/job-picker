const cheerio = require('react-native-cheerio')

export function getResults(params) {

  //Build url
  let url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

  fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ console.log(text) })
}