const API_KEY = 'AIzaSyB0enktXDl_YiF5Ap2zYgUkWef57ch55gs'
const OPTION = '&type=video&part=snippet'
const maxResult = '&maxResults=' + 5
let search = 'koala'  // 검색어

function getData() {

  // 요청
  const url = 
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}${OPTION}${maxResult}&q=${search}`

  axios.get(url)
  .then(function (res) {
    // 성공 핸들링
    console.log(res.data.items)
    appendVideo(res.data.items)
  })
  .catch(function (err) {
    // 에러 핸들링
    console.log(err);
  })
}

function appendVideo(items) {

  items.forEach(item => {
    let videoId = item.id.videoId
    let channelTitle = item.snippet.channelTitle
    let publishedAt = item.snippet.publishedAt
    let thumbnails = item.snippet.thumbnails.high.url
    // let html = `
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`
    let html = `
      <div class="col-md-3">
        <div class="item mb-4">
          <a href='#'>
            <img style="width:100%" class="" src=${thumbnails} alt=${channelTitle}/>
          </a>  
          <h4 class='title'>${channelTitle}</h4>
          <p class='date'>${publishedAt}</p>
        </div>
      </div>
    `
    $('#main .row').append(html)

  })

}

getData()

$('#btn').on('click', function(){
  // search = $('#search').val()
  // console.log(search)
  getData()
})

// $('#search').on('input', function(e){
//   console.log($(this).val())
// })

