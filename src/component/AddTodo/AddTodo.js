import React from 'react';

export default class AddTodo extends React.Component{
    constructor(){
        super()
        this.state={
            //在这里声明数据
            newtodo:''
        }
    }
    //表单提交事件
    formSubmit(e){
        e.preventDefault()//禁用表单的默认事件
        if(!this.state.newtodo){
            return;
        }
        //如果有值,就把这个新的对象传过去.显示出来
        const newTodo={
            id:Math.random(),
            name:this.state.newtodo,
            completed:false
        }
        this.state.newtodo='';
        this.props.updateTodos(newTodo);//调用父组件中的方法.这个updateTodos是在子组件上自定义的一个属性

        console.log(123)
    }
    //改变newtod的值,动态监测输入框的值
    newTodoChange(e){
        //把新改变的输入框的值赋给
        this.state.newtodo=e.target.value;
        //值变了以后就进行更新
        this.setState({});
        console.log(this.state.newtodo);
    }
    render(){
        return(
        <header>
        <h1>todos</h1>
        <form onSubmit={this.formSubmit.bind(this)}>
          <input
          className="new-todo" placeholder="What needs to be done?" autoFocus
          onChange={this.newTodoChange.bind(this)}
          value={this.state.newtodo}
          />
        </form>
      </header>
        )
    }
}