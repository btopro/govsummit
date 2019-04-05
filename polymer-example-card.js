import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-card/paper-card.js";
import "@polymer/iron-ajax/iron-ajax.js";
class PolymerExampleCard extends PolymerElement {
  static get properties() {
    return { 
      name: { 
        type: String,
      },
      image: { 
        type: String,
      },
    };
  }

  constructor() {
    super();
  }
  
  static get template() {
    return html`
    <style>
    :host {
      display: block;
    }
    paper-card {
      background-color: light-grey;
    }
    </style>
    <iron-ajax
    auto
        url="https://haxtheweb.org/site.json"
        method="GET"
        content-type="application/json"
        handle-as="json"
        on-response="_handleResponse"
      ></iron-ajax>
    <paper-card heading="[[name]]" image="[[image]]" elevation="1" animated-shadow="false">
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-actions">
        <slot name="actions"></slot>
      </div>
    </paper-card>`;
  }
  _handleResponse(e) {
    console.log(e);
  }
}

customElements.define('polymer-example-card', PolymerExampleCard);
