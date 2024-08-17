import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  comment (e) {
    this.element.innerText = `Wow, that's a real nice ${e.detail}!`
  }
}
