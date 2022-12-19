import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Özl extends Component {
  static propTypes={
    newsData:PropTypes.shape(
      {
        title:PropTypes.string,
        description:PropTypes.string

      }
    )
  }
  render() {
    console.log(this.props.newsData)
    const { title, description } = this.props.newsData;
    return (
      <div>
        {/* <h1>{this.props.baslik}</h1>
           <p>{this.props.aciklama}</p> */}
        {/* propsları iki farklı şekilde bastırdık */}
        <h1>{title}</h1>
        <p>{description}</p>


        {/* <h2><u>React in daha başindayiz lan</u></h2> 
            <form>
            <input type="text"/>
            <button> Kaydet</button>
            </form> */}
      </div>

    )
  }
}
export default Özl;

