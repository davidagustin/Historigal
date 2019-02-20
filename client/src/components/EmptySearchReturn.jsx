import React from 'react';

export const EmptySearchReturn = (props) => {
  return (
    <div className={'emptySearchReturn'}>
      Your search - <b>{props.searchQuery}</b> - did not match any documents
      <br/>
      <br/>
      <br/>
      Suggestions:
      <ul>
        <li>Make sure all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
      </ul>
    </div>
  )
};
