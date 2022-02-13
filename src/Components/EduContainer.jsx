import React from "react"
import EductionGrid from "./EductionGrid"
import AOS from "aos"

function EduContainer({ expedu }) {
  const itemsperPage = expedu.length / 2
  const numberOfPage = Math.ceil(expedu.length / itemsperPage)
  const newEXPEDU = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemsperPage
    return expedu.slice(start, start + itemsperPage)
  })

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "port-item-container", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 200, // values from 0 to 3000, with step 50ms
    easing: "ease-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "bottom-bottom", // defines which position of the element regarding to window should trigger the animation
  })
  return (
    <div className='subTitle-main-container'>
      <div className='subTitle-mainHead-exed'>
        {newEXPEDU.map((newarrays) => {
          return (
            <div className='info-section-edex'>
              {newarrays.map((items) => {
                return (
                  <div
                    data-aos='fade-up'
                    data-aos-delay={`${items.id}00`}
                    className='info-section-edex'
                    key={items.id}>
                    <EductionGrid
                      from={items.from}
                      to={items.to}
                      designation={items.designation}
                      company={items.company}
                      description={items.description}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EduContainer
