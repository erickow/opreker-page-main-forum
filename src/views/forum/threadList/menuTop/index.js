import React, { Component } from 'react';
import { } from 'carbon-components-react';

class MenuTop extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render () {
    return (
      <div className="bx--data-table-v2-container" data-table-v2>
      <section className="bx--table-toolbar">
          <div className="bx--batch-actions" aria-label="Table Action Bar">
            <div className="bx--action-list">
                <button className="bx--btn bx--btn--sm bx--btn--ghost" type="button">
                  Ghost
                  
      <svg className="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
      </svg>
    
                </button>
                <button className="bx--btn bx--btn--sm bx--btn--ghost" type="button">
                  Ghost
                  
      <svg className="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
      </svg>
    
                </button>
                <button className="bx--btn bx--btn--sm bx--btn--ghost" type="button">
                  Ghost
                  
      <svg className="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
      </svg>
    
                </button>
            </div>
            <div className="bx--batch-summary">
              <p className="bx--batch-summary__para">
              <span data-items-selected>3</span> items selected
            </p>
              <button data-event="action-bar-cancel" className="bx--batch-summary__cancel">Cancel</button>
            </div>
          </div>
    
        <div className="bx--toolbar-search-container">
          <div data-search className="bx--search bx--search--sm bx--search--light" role="search">
            <svg className="bx--search-magnifier" width="16" height="16" viewBox="0 0 16 16">
              <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z"
                fillRule="nonzero" />
            </svg>
            <label id="search-input-label-1" className="bx--label" htmlFor="search__input-2">Search</label>
            <input className="bx--search-input" type="text" id="search__input-2" role="search" placeholder="Search" aria-labelledby="search-input-label-1"/>
            <button className="bx--search-close bx--search-close--hidden" title="Clear search input" aria-label="Clear search input">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414 8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                  fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
    
          <div className="bx--toolbar-content">
              <button className="bx--toolbar-action">
                
      <svg className="bx--toolbar-action__icon" fillRule="evenodd" height="16" name="download" role="img" viewBox="0 0 14 16" width="14"
        aria-label="Download" alt="Download">
        <title>Download</title>
        <path d="M7.506 11.03l4.137-4.376.727.687-5.363 5.672-5.367-5.67.726-.687 4.14 4.374V0h1v11.03z"></path>
        <path d="M13 15v-2h1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2h1v2h12z"></path>
      </svg>
    
              </button>
              <button className="bx--toolbar-action">
                
      <svg className="bx--toolbar-action__icon" fillRule="evenodd" height="16" name="edit" role="img" viewBox="0 0 16 16" width="16"
        aria-label="Edit" alt="Edit">
        <title>Edit</title>
        <path d="M7.926 3.38L1.002 9.72V12h2.304l6.926-6.316L7.926 3.38zm.738-.675l2.308 2.304 1.451-1.324-2.308-2.309-1.451 1.329zM.002 9.28L9.439.639a1 1 0 0 1 1.383.03l2.309 2.309a1 1 0 0 1-.034 1.446L3.694 13H.002V9.28zM0 16.013v-1h16v1z"></path>
      </svg>
    
              </button>
              <button className="bx--toolbar-action">
                
      <svg className="bx--toolbar-action__icon" fillRule="evenodd" height="16" name="settings" role="img" viewBox="0 0 15 16" width="15"
        aria-label="Settings" alt="Settings">
        <title>Settings</title>
        <path d="M7.53 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"></path>
        <path d="M6.268 2.636l-.313.093c-.662.198-1.28.52-1.822.946l-.255.2-1.427-.754-1.214 1.735 1.186 1.073-.104.31a5.493 5.493 0 0 0-.198 2.759l.05.274L1 10.33l1.214 1.734 1.06-.56.262.275a5.5 5.5 0 0 0 2.42 1.491l.312.093L6.472 15H8.59l.204-1.636.313-.093a5.494 5.494 0 0 0 2.21-1.28l.26-.248 1.09.576 1.214-1.734-1.08-.977.071-.29a5.514 5.514 0 0 0-.073-2.905l-.091-.302 1.15-1.041-1.214-1.734-1.3.687-.257-.22a5.487 5.487 0 0 0-1.98-1.074l-.313-.093L8.59 1H6.472l-.204 1.636zM5.48.876A1 1 0 0 1 6.472 0H8.59a1 1 0 0 1 .992.876l.124.997a6.486 6.486 0 0 1 1.761.954l.71-.375a1 1 0 0 1 1.286.31l1.215 1.734a1 1 0 0 1-.149 1.316l-.688.622a6.514 6.514 0 0 1 .067 2.828l.644.581a1 1 0 0 1 .148 1.316l-1.214 1.734a1 1 0 0 1-1.287.31l-.464-.245c-.6.508-1.286.905-2.029 1.169l-.124.997A1 1 0 0 1 8.59 16H6.472a1 1 0 0 1-.992-.876l-.125-.997a6.499 6.499 0 0 1-2.274-1.389l-.399.211a1 1 0 0 1-1.287-.31L.181 10.904A1 1 0 0 1 .329 9.59l.764-.69a6.553 6.553 0 0 1 .18-2.662l-.707-.64a1 1 0 0 1-.148-1.315l1.214-1.734a1 1 0 0 1 1.287-.31l.86.454a6.482 6.482 0 0 1 1.576-.819L5.48.876z"></path>
      </svg>
    
              </button>
    
            <button className="bx--btn bx--btn--sm bx--btn--primary">Add new</button>
          </div>
      </section>
    
    </div>
    );  
  }
}

export default MenuTop;