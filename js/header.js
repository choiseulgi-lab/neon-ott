export function initHeader() {
  const header = document.getElementById('siteHeader')
  if (!header) return

  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}
