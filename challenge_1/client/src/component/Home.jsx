import React from 'react';

export default class Home extends React.Component {
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
                <img className='logoInHome' src='historigal.png'/>
                <form className='form'>
                    <input className='inputBarHome' name='inputBarText' type='search' value={this.props.inputBarText} onChange={this.props.handleChange} placeholder={'Search Historigal'}/>
                    <input className='submitButton' type="submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }

}
