import React from "react";
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInput: "",
            name: []
        }



    }

    handelChange = (event) => {
        this.setState({ itemInput: event.target.value })
    }
    handleClick = (add) => {
        this.props.onAdd(this.state.itemInput);

        this.setState({ name:this.state.itemInput, itemInput: "" })
    }


    render() {

        return (

            <>


                <input type="text" name="itemInput" value={this.state.itemInput} onChange={this.handelChange} />
                <button onClick={this.handleClick}>
                    add
                </button>



            </>


        );
    }


}
export default Input