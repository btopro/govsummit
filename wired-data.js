import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-list/iron-list.js";
import "@polymer/paper-button/paper-button.js";
import "./lit-example-card.js";
class WiredData extends PolymerElement {
  static get properties() {
    return { 
      ironData: {
        type: Array,
        value: [
          {
            name: "Bryan",
            image: "https://btopro.com/assets/banner.jpg",
            tagLine: "Ex Uno Plures",
            website: {
              url: "https://btopro.com/",
              name: "Btopro[dot]com"
            }
          },
          {
            name: "Mike",
            image: "https://btopro.com/assets/banner.jpg",
            tagLine: "I name my kids after Penguins cup wins",
            website: {
              url: "https://github.com/elmsln/HAXcms",
              name: "HAXcms"
            }
          },
          {
            name: "Becca",
            image: "https://btopro.com/assets/banner.jpg",
            tagLine: "No but Real talk though",
            website: {
              url: "https://drupal.org/",
              name: "Drupal"
            }
          },
          {
            name: "Other people",
            image: "https://btopro.com/assets/banner.jpg",
            tagLine: "We enjoy overpaying for things",
            website: {
              url: "https://haxtheweb.org/",
              name: "Until we found HAX"
            }
          }
        ]
      }
    };
  }
  
  static get template() {
    return html`
    <style>
    :host {
      display: block;
    }
    paper-button {
      background-color: light-grey;
    }
    lit-example-card {
      margin: 16px;
      width: 250px;
      --lit-example-card-card-text-color: blue;
    }
    </style>
    <iron-list items="[[ironData]]" as="person" grid>
      <template>
        <lit-example-card name="[[person.name]]" image="[[person.image]]">
          <p>[[person.tagLine]]</p>
          <p slot="actions">
            <a tabindex="-1" href="[[person.website.url]]">
              <paper-button raised>[[person.website.name]]</paper-button>
            </a>
          </p>
        </lit-example-card>
      </template>
    </iron-list>`;
  }
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      var evt = document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false,window,0);
      window.dispatchEvent(evt);
    },50);
  }
}

customElements.define('wired-data', WiredData);
