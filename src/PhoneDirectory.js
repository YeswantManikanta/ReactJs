import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router , Route} from 'react-router-dom';


class PhoneDirectory extends Component{
    constructor()
    {
        super();
        this.state={
            subsriberList:[{
                id:1,
                name:"AngryBird",
                phone:"7009211361"
            },
            {
                id:2,
                name:"Tammi",
                phone:"7009211361"
            }

        ]
        }
    }

    addSubscriberHandler=(newsubsriber)=>{
        let newList=this.state.subsriberList;
        if(newList.length>0){
            newsubsriber.id= newList[newList.length-1].id+1;
        }
        else
        {
            newsubsriber.id=1;
        }

        newList.push(newsubsriber);
        this.setState({
            subsriberList:newList
        })
        console.log(this.state.subsriberList);
    }

    deleteHandler=(subscriberId)=>{
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" render={(props)=> <AddSubscriber {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
                    <Route exact path='/ShowSubscribers' render={({history},props)=><ShowSubscribers{...props} subsriberList={this.state.subsriberList} deleteHandler={this.deleteHandler} />}/>
                </div>
            </Router>
        )
    }
}
export default PhoneDirectory;