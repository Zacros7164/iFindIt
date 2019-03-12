import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import titleSearchAction from '../../actions/titleSearchAction';

class Card extends Component{

    titleSearch = ()=>{
        const scrapeQuery = `${this.props.title} ${this.props.releaseDate} movie`
        console.log(scrapeQuery)
        this.props.titleSearchAction({
            scrapeQuery
        })

    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <img src={this.props.imagePath} alt={this.props.title + ' movie poster'}/>
                <h1>{this.props.title}</h1>
                <button onClick={this.titleSearch}>Where's it playing?</button>
                
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        titleSearchAction: titleSearchAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Card);
