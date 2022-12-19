import React, { Component } from 'react'
import Özl from "./Özl";
import PropTypes from 'prop-types';
import Form from "./Form"
class Arakatman extends Component {

static propTypes=
{
    dizim:PropTypes.array.isRequired,
    name:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])

}
static defaultProps = {
    name : "GÖKTAŞ"
};
  render() {
    return (
        <div>
            {
                this.props.name
            }
            {
                this.props.dizim.map(dizim =>
                    <Özl key={dizim.id} newsData={dizim} />
                    )
            }

            <Form addNews={this.props.addNews}/>
        </div>
    )
  }
}
Arakatman.propTypes =
{
    name:PropTypes.string
}
export default Arakatman;