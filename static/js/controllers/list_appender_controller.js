import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['list', 'nameInput']

  append (e) {
    this.listTarget.insertAdjacentHTML('beforeend', `<li>${this.nameInputTarget.value}</li>`)
    this.dispatch('listWasAppended', { detail: this.nameInputTarget.value })
    this.nameInputTarget.value = ''
  }
}
