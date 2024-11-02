/**
 * Copyright 2024 chirasvigowda 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from 'lit';

export class NasaImage extends LitElement {
  constructor() {
    super();
    this.source = '';
    this.alt = '';
    this.secondaryCreator = ''; 
    this.title = ''; 
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      alt: { type: String },
      secondaryCreator: { type: String }, 
    };
  }

  static get styles() {
    return css`
      .card {
        display: inline-block;
        width: 240px; 
        height: 240px; 
        border: 1px solid #827070; 
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
      }
      .image {
        height: 100%; 
      }
  
      .image img {
        width: 100%; 
        height: auto; 
      }
      .img:hover {
        background-color: #97a5dc; 
      }
  
      .title, .creator {
        max-width: 100%;
        font-size: 16px;
        font-weight: bold;
        padding: 8px;
      }
  
      .creator {
        font-size: 14px; 
        font-weight: normal; 
      }
    `;
  }  

  render() {
    return html`
      <div class="card" tabindex="0">
        <a href="${this.source}" target="_blank" rel="noopener noreferrer">
          <img class="image" src="${this.source}" alt="${this.alt}" />
        </a>
        <div class="title">${this.title}</div>
        <div class="creator">By: ${this.secondaryCreator}</div> 
      </div>
    `;
  }

  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);




