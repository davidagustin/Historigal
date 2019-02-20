import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.inputBarText === "") {
      return;
    }
    this.props.changeView('search');
  }

  render() {
    return (
      <div className='searchInHome'>
        <img className='logoInHome'
             src='historigal.png'/>
        <form className='form'>
          <input className='inputBarHome'
                 name='inputBarText'
                 type='search'
                 value={this.props.inputBarText}
                 onChange={this.props.handleChange}
                 placeholder={'Search Historigal'}
                 autoComplete="off" />
          <input className='submitButton'
                 type="submit"
                 onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
