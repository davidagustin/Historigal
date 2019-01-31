import React from 'react';
import ReactPaginate from 'react-paginate';
import {EmptySearchReturn} from './EmptySearchReturn.jsx'
import {SearchItems} from './SearchItems.jsx'
import axios from 'axios'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalItemsInSearch: null,
            pageCount: 0,
            searchResult: [],
            inputBarText: "",
            searchQuery: "",
            emptySearch: true,
            currentPage: 0
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            inputBarText: this.props.inputBarText,
            searchQuery: this.props.inputBarText
        }, () => {
            this.getData();
        });
    }

    getData(pageNumber = 0) {
        axios.get(`/events/?description_like=${this.state.searchQuery}`)
            .then(results => {
                this.setState({
                    totalItemsInSearch: results.data.length,
                    pageCount: Math.ceil(results.data.length/ 10),
                    currentPage: pageNumber,
                })
            }).then(() => {
            axios.get(`/events/?description_like=${this.state.searchQuery}&_page=${this.state.currentPage}&_limit=10`)
                .then(results => {
                    if (results.data.length === 0) {
                        this.setState({
                            emptySearch: true,
                            data: "",
                        })
                    } else {
                        this.setState({
                            emptySearch: false,
                            searchResult: results.data
                        })
                    }
                });
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.inputBarText === "") {
            return;
        }
        this.setState({
            searchQuery: this.state.inputBarText
        }, () => {
            this.getData();
        });
    }


    handleChange(e) {
        e.preventDefault();
        const inputBarText = {};
        inputBarText[e.target.name] = e.target.value;
        this.setState(inputBarText);
    }

    handlePageClick (e) {
        console.log(e.selected);
        this.getData(e.selected);
        window.scrollTo(0, 0);
    };

    render() {

        return (
            <div>
                <div className='searchInSearch'>
                    <img className='logoInSearch' src='historigal.png' onClick={() => {
                        this.props.changeView('search')
                    }}/>
                    <form onSubmit={this.handleSubmit}>
                        <input className='inputBarInSearch'
                               name='inputBarText'
                               type='text'
                               value={this.state.inputBarText}
                               onChange={this.handleChange}/>
                    </form>
                </div>
                <div className={'searchItems'}>
                    {this.state.emptySearch ?
                        <EmptySearchReturn searchQuery={this.state.searchQuery}/> :
                        <div>
                            <SearchItems totalItemsInSearch={this.state.totalItemsInSearch} results={this.state.searchResult}/>
                            <img className={'logoInSearchBottom'} src='historigal.png'/>
                            <div>
                                <ReactPaginate
                                    initialPage={this.state.currentPage}
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={0}
                                    pageRangeDisplayed={9}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={'pagination'}
                                    subContainerClassName={'pages pagination'}
                                    activeClassName={'active'}/>
                            </div>
                        </div>
                    }
                </div>
                <div className={"greyFilling"} />
            </div>

        )
    }

}

