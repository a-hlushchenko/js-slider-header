class Slider {
  static #slider = null
  static #btnPrev = null
  static #btnNext = null

  static #count = 1
  static #max = null

  static init = () => {
    this.#slider = document.querySelector('.slider')
    this.#btnPrev = document.querySelector('.button-prev')
    this.#btnNext = document.querySelector('.button-next')
    this.#max = this.#slider.childElementCount

    this.#btnPrev.onclick = () => this.#slide('left')
    this.#btnNext.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    let offsetWidth = this.#slider.offsetWidth
    let scrollWidth = this.#slider.scrollWidth

    const space = Number(
      window
        .getComputedStyle(this.#slider)
        .getPropertyValue('gap')
        .slice(0, -2),
    )

    let scroll = 0

    if (side === 'left') {
      if (this.#count === 1) {
        this.#count = this.#max
        scroll = scrollWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * (offsetWidth + space)
      }
    } else if (side === 'right') {
      if (this.#count === this.#max) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll += (this.#count - 1) * (offsetWidth + space)
      }
    }

    this.#slider.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init = () => {
    this.#height = document.querySelector('.header-buttom')
    this.#wrapper = document.querySelector(
      '.header-wrapper',
    )
    this.#button = document.querySelector('.header-button')

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.remove('header-button-close')

      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.add('header-button-close')

      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen
  }
}

Header.init()
