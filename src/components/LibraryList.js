import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = dataSource.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);

export default connect(mapStateToProps)(LibraryList);
