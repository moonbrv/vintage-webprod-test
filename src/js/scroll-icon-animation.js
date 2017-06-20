import { TimelineLite } from 'gsap'

export default class ScrollIcon {
  constructor () {
    this.path = document.getElementById('scrolldown_icon-2')
    this.addPath1 = this.path.cloneNode()
    this.addPath1.id = 'add-path-1'
    this.addPath2 = this.path.cloneNode()
    this.addPath2.id = 'add-path-2'
    this.icon = document.getElementById('scrolldown_icon')
    this.circle = document.querySelector('#scrolldown_icon circle')
    this.icon.appendChild(this.addPath1)
    this.icon.appendChild(this.addPath2)

    this.path.style.stroke = '#fff'
    this.path.style.fill = 'rgba(255,255,255,.55)'

    this.addPath1.style.stroke = '#a7627f'
    this.addPath1.style.strokeDasharray = 107
    this.addPath1.style.strokeDashoffset = '-107'

    this.addPath2.style.stroke = '#a7627f'
    this.addPath2.style.strokeDasharray = 107
    this.addPath2.style.strokeDashoffset = 107

    this.circle.style.fill = '#a7627f'

    this.animate = new TimelineLite({
      onComplete: function () {
        this.restart()
      }
    })
    this.animate
    .to(this.addPath1, 1, {
      strokeDashoffset: '-54'
    }, 'second')
    .to(this.addPath2, 1, {
      strokeDashoffset: 54
    }, 'second')
    .to(this.circle, 1, {
      opacity: 0,
      y: '+=15'
    }, 'second')
  }
}
