import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements'

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(text) {
    this.setState({input: text})
  }

  render() { 
    return ( 
      <SearchBar 
        placeholder={this.props.keyword || "Search By Keyword"}
        value={this.state.input}
        showLoadingIcon={this.props.loading}
        lightTheme
        onChangeText={this.updateInput}
        searchIcon={{ size: 24 }}
        returnKeyType='go'
        onSubmitEditing={()=> this.props.searchHandler(this.state.input)}
        clearButtonMode="while-editing"
      />
     )
  }
}