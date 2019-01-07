const cheerio = require('react-native-cheerio')

export function getResults(params) {

  //Build url
  let url = 'https://www.linkedin.com/jobs/search/?keywords=' + params.searchString + '&location=' + params.locations[0]

  fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ 
    // console.log(text)
    const $ = cheerio.load(text)
    console.log(html)
    console.log('fired')
    // $('script').each(function(i, element){
    //   const a = $(this).prev();
    //   // const metadata = {
    //   //   url: a.child().child().attr('content')
    //   // }
    //   console.log(a.html());
    // });
  })
}