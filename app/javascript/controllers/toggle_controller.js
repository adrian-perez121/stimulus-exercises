import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "object" ]
  static classes = [ "change" ]

  change() {
    // this.objectTarget.classList.toggle(this.changeClass)
    this.objectTargets.forEach(target => {
      target.classList.toggle(this.changeClass)
      console.log(target)
    })
  }
}
