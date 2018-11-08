import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `tmon-widget`
 * TMON health card
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TmonWidget extends PolymerElement {
  static get template() {
    return html`
    <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <input type="text"></input> 
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Welcome',
      },
    };
  }
}

window.customElements.define('tmon-widget', TmonWidget);
