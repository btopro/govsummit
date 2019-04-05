import "@polymer/paper-card/paper-card.js";
import { LitElement, html } from 'lit-element';

class LitExampleCard extends LitElement {
  static get properties() {
    return { 
      name: { type: String },
      image: { type: String }
    };
  }

  constructor() {
    super();
  }
  
  render() {
    return html`
    <style>
    :host {
      display: block;
    }
    paper-card {
      background-color: light-grey;
      color: var(--lit-example-card-card-text-color, white);
    }
    </style>
    <paper-card heading="${this.name}" image="${this.image}" elevation="1" animated-shadow="false">
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-actions">
        <slot name="actions"></slot>
      </div>
    </paper-card>`;
  }
}

customElements.define('lit-example-card', LitExampleCard);