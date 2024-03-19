import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      { /* content */ }
    </ReactLenis>
  )
}