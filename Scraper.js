const cheerio = require('react-native-cheerio')

export function getResults(params) {

  //Build url
  let url = 'https://www.linkedin.com/jobs/search/?keywords=' + params.searchString + '&location=' + params.locations[0]
  let data = {}
  fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ 
    const $ = cheerio.load(text)
    console.log('fired')
    $('script').each(function(i, element){
      const a = $(this).prev();
      // const metadata = {
      //   url: a.child().child().attr('content')
      // }
      let jsonData = String(a.html())
      if(jsonData.indexOf('elements') !== -1) {
        jsonData = jsonData.slice(4, jsonData.length - 3)
        jsonData = JSON.parse(jsonData)
        data = jsonData
      } 
    });
    console.log(data)
  })
}