import React, {Component,Fragment} from 'react';
import './ShowSubscriber.css';
import Header from './Header';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {
    constructor() {
        super();
        this.state = {
            subscribersListToShow:[]
        }
        
    }
    onDeletedClick = (subscriberId) => {
        this.props.deleteHandler(subscriberId); 
      }

    render() {
       
        return (
            <Fragment>
                <Header 
                headername="Subscribers"/>
                <Link to="/"><button className="btn btn-warning">Back</button></Link>
                <div className="container">
                    <div className="grid-container">
                        <div className="grid-heading">
                            <header>Our Subsribers Details</header>
                        </div>
                    </div>
                    {
                      this.props.subsriberList.map(sub => {
                        return <div key={sub.id} className="grid-items" >
                            <span className="grid-item"> {sub.name} </span>
                            <span className="grid-item" > {sub.phone} </span>
                            <span className="  grid-item action-btn-container">
                                <button className="btn btn-success" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                            </span>
                            </div>
                        
                                })
                    }
                </div>
                
            </Fragment>
        )
    }

}
export default ShowSubscribers;