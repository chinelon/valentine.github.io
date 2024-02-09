function playVideo() {
    const video = document.getElementById('video')

    video.innerHTML = `
<video width="500" height="650" autoplay>
  <source src="val.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
`

}