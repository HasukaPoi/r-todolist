import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //初期化state，目前还没有东西
        }
    }

    // 组件必备的render方法
    render() {
        return (
            <div>
                To-Do List
            </div>
        );
    }
}