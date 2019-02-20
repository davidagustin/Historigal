import React from 'react';

export const SearchItems = (props) => {
    const searchItems = props.results.map((item, i) => {
        let searchText;
        let catergory1;

        if (item.category1 === undefined) {
            catergory1 = item.category1;
        } else {
            catergory1 = item.category1.toLowerCase()
        }

        if (item.description.length > 50) {
            searchText = item.description.slice(0, 49) + '...';
        }

        return (
            <div className={"itemContainer"} key={i}>
                <div className={"titleSearchText"}>
                    {searchText}
                </div>
                <div className={"itemGreenText"}>
                    Date: {item.date} Category type {catergory1}: {item.category2}
                </div>
                <div className={"itemDescription"}>
                    {item.description}
                </div>
            </div>
        )
    });

    return (
        <div className={'test'}>
            <div className={'totalItems'}>About {props.totalItemsInSearch} results</div>
            <div>
                {searchItems}
            </div>
        </div>
    )
};
