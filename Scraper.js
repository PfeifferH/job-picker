const cheerio = require('react-native-cheerio')

export async function getResults(params) {

  //Build url
  let url = 'https://www.linkedin.com/jobs/search/?keywords=' + params.searchString + '&location=' + params.locations[0]
  let jsonData = {}
  let data = {}

  let results = await fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ 
   
    const $ = cheerio.load(text)
    $('script').each(function(i, element){
      const a = $(this).prev();
      // const metadata = {
      //   url: a.child().child().attr('content')
      // }
      jsonData = String(a.html())
      if(jsonData.indexOf('elements') !== -1) {
        jsonData = jsonData.slice(4, jsonData.length - 3)
        jsonData = JSON.parse(jsonData)
        data = jsonData.elements
      } 
    }) 
    return data
  }).catch(() => {
    return {}
  })
  return results
}
