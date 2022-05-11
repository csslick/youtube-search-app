    const params = new URLSearchParams(location.search)
    const id = params.get('id')
    console.log(params, id)
    let html = `
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    </div>`


    $('#main .container').append(html)