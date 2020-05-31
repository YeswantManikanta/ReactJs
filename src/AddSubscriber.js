import React, { Component, Fragment } from 'react';
import './AddSubscriber.css';
import Header from './Header';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class AddSubscriber extends Component{
    constructor()
    {
        super();
        this.state={
            id:0,
            name:"",
            phone:""
        }
    }

    inputChange=(e)=>{
        const state= this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }

    addHandler=(e)=>{
        if(this.state.phone.trim()!=="" && this.state.name.trim()!=="")
        {
        const ele=<span>Thank You.....{this.state.name} added successfully.  </span>;
        ReactDOM.render( ele , document.getElementById('success-msg'));  
        }

    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0,name:'',phone:''});
        this.props.history.push("/");
    }

    
    render(){
      
        return(
            <Fragment>
                <Header 
                headername="Add Subscribe"/><br/>
                
                    <div className="grid-items">
                       <form className="sub-form" onSubmit={this.onFormSubmitted.bind(this)}>
                           
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" name="name" onChange={this.inputChange} required ></input><br/><br/>
                        <label htmlFor="phone">Phone :</label>
                        <input type="text" className="form-control" name="phone" onChange={this.inputChange} required></input><br/>
                        <button type="submit" className="btn" id="addBtn" onClick={this.addHandler}>ADD</button>
                       <Link to="/ShowSubscribers"><button type="button" className="btn btn-success" id="showBtn">Show Subscribers</button></Link>
                       {
                        <div className="add-sub-show ">
                            <p>Subscriber to be added as below :</p>
                            <span>Name : {this.state.name}</span>
                            <br/>
                            <span>Phone : {this.state.phone}</span>
                        </div>
                        }
                         <p id="success-msg" style={{color:'white',fontWeight:'500',marginTop:'5%'}} ></p>
                       </form>
                       
                        
                    </div>
                     
                    
                
            </Fragment>
        )
    }
}
export default AddSubscriber;