import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// returned object will be the props of BookList. KEY TO REACT AND REDUX.
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// Anything returned from this function, will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed to every reducer
  // dispatch passes the action to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a smart container. e.g. connect to React-redux.
// Needs the new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);