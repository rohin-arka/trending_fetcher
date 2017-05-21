// Importing react and react-dom modules
import React from 'react';

export default class Trending extends React.Component{
  constructor(props){
    super(props);
    this.state = { selected: 'All' };
  }

  updateState(language){
    this.setState(function(){
      return { selected: language, }
    });
  }

  render(){
    const languages = ['All', 'C', 'Ruby', 'Javascript', 'Python', 'Java', 'C++',
                       'Swift']
    return(
      <ul className='programming-languages'>
        <p>Selected Languages: {this.state.selected}</p>
        {languages.map(function (language) {
          return <li
                  key={language}>
                  {language}</li>
        })}
      </ul>
    )
  }
}
