import React from 'react';
export default class Item extends React.Component{
    constructor(){
        super()
        this.state={
            liStyle:''
        }
    }
    //复选框按钮的状态

    checkChange(e){
        this.props.mytodo.completed=e.target.checked;
        console.log('44',e.target.checked);
        //得到当前点击的复选框的状态,重新赋值以后更新,在这里不能直接调用this.setState()方法
        // this.setState({});
        this.props.listUpdate();
    }
    checkBoxClick(){
        console.log('33')
    }
    //双击对输入框进行编辑,显示出编辑状态
    doubleClick(){
        this.state.liStyle='editing';
        this.setState({})
        //在调用了了setState方法后,会立即执行下一行代码,这时候Input的编辑样式还没有出来
        setTimeout(function(){
            this.refs.edit.focus()
        },500)
        console.log('编辑')
    }
    //编辑之后进行保存的事件
    saveSubmit(e){
        //阻止默认事件
        e.preventDefault();
        //保存数据后就把编辑样式去掉
         this.setState({
          liStyle:''
        })
    }
    //编辑状态下的数据变化
    editChange(e){
        //在这里不能使用调用setState()方法,因为只会更新当前组件或者当前组件的子组件
        //可以调用父组件的更新方法
       this.props.mytodo.name= e.target.value;
       //改变之后进行更新
       this.setState({})
    }
    render(){
        return(
            <li className={this.state.liStyle}>
             <div className="view">
                <input type="checkbox" className="toggle"
                onChange={this.checkChange.bind(this)}
                checked={this.props.mytodo.completed}
                onClick={this.checkBoxClick.bind(this)}
                />
                <label onDoubleClick={this.doubleClick.bind(this)}>{this.props.mytodo.name}</label>
                {/*删除的按钮*/}
                 <button className="destroy"
                  onClick={()=>{
                    this.props.listDelTodo(this.props.mytodo.id)
                  }}
              ></button>
             </div>
             <form onSubmit={this.saveSubmit.bind(this)}>
                 <input className='edit' ref='edit'
                 onChange={this.editChange.bind(this)}
                 value={this.props.mytodo.name}
                 />
             </form>
            </li>
            )
    }
}