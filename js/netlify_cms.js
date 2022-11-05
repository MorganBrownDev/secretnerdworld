
function render (container, message) {
  container.innerHTML = `<p>${message}</p>`
}

function render_img (home, thumbnail) {
 home.style.background = 'url('+thumbnail+')';
}

function render_slide1 (s1, slide_image_1) {
 s1.src = `slide_image_1`
}

function render_slide2 (s2, slide_image_2) {
 s2.src = `slide_image_2`
}

function render_slide3 (s3, slide_image_3) {
s3.src = `slide_image_3`
}

(async function () {

  const app = document.getElementById('contact')
  const home = document.getElementById('home')
  const s1 = document.getElementById('s1')
  const s2 = document.getElementById('s2')
  const s3 = document.getElementById('s3')
  
  let about = await fetch('content/about.json')
  let ready = await about.json()
  
  let { message } = ready
  let { thumbnail } = ready
  let { slide_image_1 } = ready
  let { slide_image_2 } = ready
  let { slide_image_3 } = ready

  render(app, message)
  render_img (home, thumbnail)
  render_slide1 (s1, slide_image_1)
  render_slide2 (s2, slide_image_2)
  render_slide3 (s3, slide_image_3)

  const nav = document.createElement('nav')

  app.appendChild(nav)
  render(nav, `change this at the <a href="admin">admin</a>`)
})()
