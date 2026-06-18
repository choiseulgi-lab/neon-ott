export function initSliders() {
  const tracks = document.querySelectorAll('.card-track')

  tracks.forEach(track => {
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    // 마우스 드래그 스크롤 (데스크탑)
    track.addEventListener('mousedown', e => {
      isDown = true
      track.style.cursor = 'grabbing'
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
    })

    track.addEventListener('mouseleave', () => {
      isDown = false
      track.style.cursor = 'grab'
    })

    track.addEventListener('mouseup', () => {
      isDown = false
      track.style.cursor = 'grab'
    })

    track.addEventListener('mousemove', e => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.2
      track.scrollLeft = scrollLeft - walk
    })

    track.style.cursor = 'grab'
  })
}
