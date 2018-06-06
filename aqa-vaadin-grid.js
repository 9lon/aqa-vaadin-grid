import '@polymer/polymer/polymer-element.js';
import '@9lon/aqa-font/aqa-trirong-font.js';
import '@9lon/aqa-font/aqa-mitr-font.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="aqa-vaadin-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        height: auto;
        border: 1px solid #ddd;
      }
      :host [part~="cell"]:not([part~="details-cell"]) ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }

      [part~="cell"] {
        color: #000;
        font-size: 1rem;
        padding:5px;
        border-right:1px solid #ddd;
        font-family: TrirongRegular;
        margin:0;
      }

      [part~="cell"]:last-child {
        border-right:0;
      }

      [part~="cell"]:focus {
        outline: none;
      }


      [part~="header-cell"],
      [part~="footer-cell"] {
        color: white;
        font-size: 1rem;
        background-color:#62a8ea;
        padding: 0.5rem;
        text-align:center;
        font-family: MitrLight;
      }

      [part~="footer-cell"] {
        background-color:#EEE;
        color: #555;
      }


      [part~="body-cell"] {
        color: #000;
        font-size: 1rem;
        padding:5px;
        font-family: TrirongRegular;
        margin:0;
      }


      [part~="body-cell"],
      [part~="row"]:last-child [part~="header-cell"] {
        border-bottom: 1px solid #ddd;
      }

      [part~="row"]:nth-child(even) [part~="body-cell"] {
        background-color:#f3f7f9;
      }

      [part~="row"]:hover [part~="body-cell"] {
        background-color:#ECF9FA;
      }
      
    
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
