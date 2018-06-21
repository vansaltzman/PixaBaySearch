import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(text) {
    this.setState({input: text}) // Locally controlled input
  }

  render() { 
    return ( 
      <SearchBar 
        value={this.state.input}
        onChangeText={this.updateInput}
        onSubmitEditing={()=> this.props.searchHandler(this.state.input)}
        placeholder={this.props.keyword || "Search By Keyword"}
        showLoadingIcon={this.props.loading}
        lightTheme
        searchIcon={{ size: 24 }}
        returnKeyType='go'
        clearButtonMode="while-editing"
      />
     )
  }
}