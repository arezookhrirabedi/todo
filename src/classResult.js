import React from "react";
class Result extends React.Component {
    constructor(props) {
        super(props);







    }
render(){
  
    return(
<React.Fragment>
<p>
    {this.props.name}
</p>
<button>
    DELETE
</button>

</React.Fragment>



    );
}


}
        export default Result