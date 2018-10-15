import React, { Component } from 'react';
import MenuTop from './menuTop'
import { Tile } from 'carbon-components-react';

// import NavLogo from './../../../assets/img/favicon.ico'
import Logo from './../../../assets/img/dummy.jpg';

class ThreadList extends Component {
  constructor(props){
    super(props);
    this.state = {
      headers:[
        {key: 'name',header: 'Name'},
        {key: 'protocol',header: 'Protocol'},
        {key: 'port',header: 'Port'},
      ],
      data:[{
        id: 'a',
        name: 'Load Balancer 3',
        protocol: 'HTTP',
      },{
        id: 'b',
        name: 'Load Balancer 1',
        protocol: 'HTTP',
      },{
        id: 'c',
        name: 'Load Balancer 2',
        protocol: 'HTTP',
      }]
    };
  }
  
  render () {
    return (
      <div className="bx--grid">
          <div className="bx--row" style={{margin:'1rem'}}>
            <div className="bx--col-md-8" >
              <Tile>
                <MenuTop/>
                <section className="bx--structured-list">
                  <div className="bx--structured-list-thead">
                    <div className="bx--structured-list-row bx--structured-list-row--header-row">
                        <div className="bx--structured-list-th">Tread</div>
                        <div className="bx--structured-list-th">Title</div>
                        <div className="bx--structured-list-th">Status</div>
                    </div>
                  </div>
                  <div className="bx--structured-list-tbody">
                        <div className="bx--structured-list-row">
                            <div className="bx--structured-list-td bx--structured-list-content--nowrap">Row 1</div>
                            <div className="bx--structured-list-td">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue.
                    </div>
                    <div className="bx--structured-list-td">Row 2</div>
                        </div>
                        <div className="bx--structured-list-row">
                            <div className="bx--structured-list-td bx--structured-list-content--nowrap">Row 2</div>
                            <div className="bx--structured-list-td">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue.
                    </div>
                    <div className="bx--structured-list-td">Row 2</div>
                        </div>
                  </div>
                </section>
                <div className="bx--pagination" data-pagination>
                <div className="bx--pagination__left">
                  <span className="bx--pagination__text">Items per page:</span>
                  <div className="bx--select bx--select--inline">
                    <label htmlFor="select-id-pagination" className="bx--visually-hidden">Number of items per page</label>
                    <select id="select-id-pagination" className="bx--select-input" data-items-per-page>
                      <option className="bx--select-option" value="10" selected>10</option>
                      <option className="bx--select-option" value="20">20</option>
                      <option className="bx--select-option" value="30">30</option>
                      <option className="bx--select-option" value="40">40</option>
                      <option className="bx--select-option" value="50">50</option>
                    </select>
                    <svg className="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
                      <path d="M0 0l5 4.998L10 0z" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bx--pagination__text">
                    <span>|&nbsp;</span>
                    <span data-displayed-item-range>1-10</span> of
                    <span data-total-items>40</span> items</span>
                </div>
                <div className="bx--pagination__right bx--pagination--inline">
                  <span className="bx--pagination__text">
                    <span data-displayed-page-number>1</span> of
                    <span data-total-pages>4</span> pages</span>
                  <button className="bx--pagination__button bx--pagination__button--backward" data-page-backward aria-label="Backward button">
                    <svg className="bx--pagination__button-icon" width="7" height="12" viewBox="0 0 7 12">
                      <path fillRule="nonzero" d="M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z" />
                    </svg>
                  </button>
                  <label htmlFor="page-number-input" className="bx--visually-hidden">Page number input</label>
                  <div className="bx--select bx--select--inline">
                    <label htmlFor="select-id-pagination" className="bx--visually-hidden">Number of items per page</label>
                    <select id="select-id-pagination" className="bx--select-input" data-page-number-input>
                      <option className="bx--select-option" value="1" selected>1</option>
                      <option className="bx--select-option" value="2">2</option>
                      <option className="bx--select-option" value="3">3</option>
                      <option className="bx--select-option" value="4">4</option>
                      <option className="bx--select-option" value="5">5</option>
                    </select>
                    <svg className="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
                      <path d="M0 0l5 4.998L10 0z" fillRule="evenodd" />
                    </svg>
                  </div>
                  <button className="bx--pagination__button bx--pagination__button--htmlForward" data-page-htmlForward aria-label="htmlForward button">
                    <svg className="bx--pagination__button-icon" width="7" height="12" viewBox="0 0 7 12">
                      <path fillRule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                    </svg>
                  </button>
                </div>
              </div>
                
              </Tile>
            </div>
            <div className="bx--col-md-4">
                <Tile>
                  <img src={Logo} alt="logo" style={{width:'100%', height:'15rem'}}></img>
                </Tile>
            </div>
          </div>
        </div>
    );  
  }
}

export default ThreadList;