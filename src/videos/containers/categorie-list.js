import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import CLayout from '../components/categories-layout'
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list: state.body.categories,
  }
}

class CategorieList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"/>
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      <Category {...item}/>
    )
  }
  render(){
    return (
      <CLayout
        title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent= {this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </CLayout>
    )
  }
}

export default connect (mapStateToProps)(CategorieList);
