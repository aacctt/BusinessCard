import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getOcr} from "../reducer"
import { connect } from 'react-redux';

class ResultPage extends React.Component {
	render(){
		console.log("Hello Result Component");
		const { strings } = this.props;
		return(
	      <View style={styles.container}>
	        <FlatList
	          data={strings}
	          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
	        />
	      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const mapStateToProps = ({ strings }) => ({
  strings
});

const mapDispatchToProps = {
  getOcr
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);