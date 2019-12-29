import React from "react";
import Input from "./component/Input";
class Todo extends React.Component {
    state = {
        // myList: ['cssc', {title:'casc', check:false}],
        myList: [],
        // chek: true

    }

    // remove(remove) {
    //     debugger;
    //     const delS = { ...this.state };
    //     remove.mylist.pop({
    //         title: remove,
    //     });
    //     this.setState(remove);
    // }
    onAdd(newValue) {
        debugger;
        const newS = { ...this.state };
        newS.myList.push({
            title: newValue,
            done: false
        });
        this.setState(newS);

    }
    // handelchange = (event) => {
    //     this.setState({ checked: event.target.checked })

    // }

    onRemove(index) {
        debugger;
        const newlist = [...this.state.myList];
        newlist.splice(index, 1);

        this.setState({ myList: newlist });
    }

    onUpdate(item) {
        debugger;
    }

    onDone(item) {
        debugger;
        // const newList = {...}
    }
    onNotDone(item) {
        debugger;
        // const newList = {...}
    }


    render() {

        return (

            <>

                <Input onAdd={(v) => this.onAdd(v)} name={''} myTitles={[]} />
                <div>
                    {
                        this.state.myList.map(
                            (item, i) =>
                                <li key={i}>

                                    <span>{item.title}, {item.done ? '*' : ':('}</span>
                                    &nbsp;&nbsp;
                            <span onClick={() => this.onRemove(i)}>remove</span>
                                    {/* <span onClick={() => this.onNotRemove(item)}>notremove</span> */}

                                    &nbsp;&nbsp;
                            <span onClick={() => this.onUpdate(item)}>update</span>
                                    &nbsp;&nbsp;
                            {
                                        item.done ?
                                            <span onClick={() => this.onNotDone(item)}>not done</span>
                                            :
                                            <span onClick={() => this.onDone(item)}>done</span>
                                    }



                                    {/* <input type="checkbox" name="ckecked" value={this.state.checked} onChange={this.handelchange} /> */}

                                </li>
                        )
                    }
                </div>
                <br />




            </>
        );


    }




}
export default Todo
