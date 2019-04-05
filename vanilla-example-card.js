import "@polymer/paper-card/paper-card.js";

class ExampleCard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "image"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    if (this.debug) {
      this.render();
    }
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(newValue) {
    if (this.__ready) {
      this.setAttribute("name", newValue);
    }
  }
  get image() {
    return this.getAttribute("image");
  }
  set image(newValue) {
    if (this.__ready) {
      this.setAttribute("image", newValue);
    }
  }

  constructor(delayRender = false) {
    super();

    this.template = document.createElement("template");

    this.attachShadow({ mode: "open" });

    this.render();
  }
  connectedCallback() {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleElement(this);
    }
  }
  render() {
    this.shadowRoot.innerHTML = null;
    this.template.innerHTML = this.html;

    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, 'vanilla-example-card');
    }
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  get html(){ return `<style>
    :host {
      display: block;
    }
    paper-card {
      background-color: light-grey;
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

customElements.define('vanilla-example-card', ExampleCard);