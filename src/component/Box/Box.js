import React from 'react';
import ReactDOM from 'react-dom';
import  './Box.less';

import Item from '../Item/Item.js';
import AddTodo from '../AddTodo/AddTodo.js';
import Footer from '../Footer/Footer.js';
export default class Box extends React.Component{
    constructor(){
        super()
        this.state={
            checked:false,
            test:'小米',
            todos:[
            {id:1,name:'jj',completed:true},
            {id:2,name:'oo',completed:false},
            {id:3,name:'pp',completed:false},
            {id:4,name:'kk',completed:false},
            ]
        }
    }
    updateTodos(newTodo){
        console.log('55')
        //把传过来的新数据放进去
        this.state.todos.push(newTodo);
        //更新界面 渲染结构
        this.setState({});

    }
    toggleChange(e){
        consoel.log('eeeee',e)
        this.state.checked=e.target.checked;
    }
    listUpdate(){
        console.log('1111')
        this.setState({})
    }
    delTodo(id){
        console.log('222');
        //根据id来删除,所以要先遍历这个数据的数组,找到对应的Id
        const newdDou=this.state.todos.filter(function(item){
            return item.id!==id
        })
        //返回一个新数组,重新赋值,然后渲染
        this.state.todos=newdDou;
        this.setState({})
    }
    render(){
        return(
            <section className='todoapp'>
              <AddTodo updateTodos={this.updateTodos.bind(this)} />
                 <section className="main">
                     <input className="toggle-all"
                          onChange={this.toggleChange.bind(this)}
                          checked={this.state.checked}
                          type="checkbox" />
                     <label htmlFor="toggle-all">Mark all as complete</label>
                     <ul className="todo-list">
                        {this.state.todos.map((item)=>{
                            return <Item key={item.id}
                             listUpdate={this.listUpdate.bind(this)}
                             listDelTodo={this.delTodo.bind(this)}
                             mytodo={item}
                            />
                        })}
                     </ul>
                 </section>
            </section>
            )
    }
}