import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        // 获取HTML表单输入需要用createRef的变量来接收
        this.inputToDo = React.createRef();

        this.addToDo = this.addToDo.bind(this);

        this.state = {
            //初期化state
            list: [
                {
                    title: '背单词',
                    checked: false
                },
                {
                    title: '学习前端',
                    checked: true
                },
                {
                    title: '锻炼',
                    checked: false
                },
                {
                    title: '午睡',
                    checked: false
                },
            ]
        }
    }

    addToDo(event) {
        console.log(event.keyCode)
        if (event.keyCode === 13) {
            let templist = this.state.list;
            templist.push(
                {
                    title: this.inputToDo.current.value,
                    checked: false
                }
            )
            this.setState({
                list: templist,
            })
            this.inputToDo.current.value = '';
        }
    }

    checkboxChange(index) {
        let templist = this.state.list;
        templist[index].checked = !templist[index].checked;
        this.setState({
            list: templist,
        })
    }

    removeToDo(index) {
        let templist = this.state.list;
        templist.splice(index, 1);
        this.setState({
            list: templist,
        });
    }

    // 组件必备的render方法
    render() {
        return (
            <div>
                <header>
                    Add a to-do:
                    <input type="text" ref={this.inputToDo} onKeyUp={this.addToDo}></input>

                </header>
                <h2>Things to do</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            if (!value.checked) {
                                return (
                                    <li key={"unchecked" + index.toString()}>
                                        <input
                                            type="checkbox"
                                            checked={value.checked}
                                            onChange={this.checkboxChange.bind(this, index)} />
                                        {value.title}
                                        <button className="btn-del" onClick={this.removeToDo.bind(this, index)}>Delete</button>
                                    </li>
                                )
                            } else return "";
                        })
                    }
                </ul>
                <h2>Things done</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            if (value.checked) {
                                return (
                                    <li key={"checked" + index.toString()}>
                                        <input
                                            type="checkbox"
                                            checked={value.checked}
                                            onChange={this.checkboxChange.bind(this, index)} />
                                        {value.title}
                                        <button className="btn-del" onClick={this.removeToDo.bind(this, index)}>Delete</button>
                                    </li>
                                )
                            } else return "";
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;