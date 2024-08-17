import { Controller } from '@hotwired/stimulus'

export default class RelayController extends Controller {
  forward (e) {
    const subscribers = this.element.querySelectorAll(`[data-relay-events*='${e.type}']`)
    subscribers.forEach(el => {
      el.dispatchEvent(new CustomEvent(e.type, {
        bubbles: false,
        detail: e.detail,
        params: e.params
      }))
    })
  }
}
