import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="word-count"
export default class extends Controller {
  static targets = ["textField", "characterOutput"];
  static values= { maxLength: {type: Number, default: 0} };

  connect() {
    this.lengthOutput()
  }
  lengthOutput() {
    const length = this.textFieldTarget.value.length;
    if (length <= this.maxLengthValue * 0.70) {
      this.characterOutputTarget.classList.add("hidden")
      console.log('We are not that close yet')
    }
    else {
      this.characterOutputTarget.classList.remove("hidden")
      this.characterOutputTarget.innerHTML = `${length}/${this.maxLengthValue}`
      console.log('We are that close')
    }
    this.#nearMaxLength(length)
  }
  #nearMaxLength(length) {
    if (length >= (this.maxLengthValue - 10)) {
      this.characterOutputTarget.classList.add("red")
    }
    else {
      this.characterOutputTarget.classList.remove("red")
    }
  }
}
