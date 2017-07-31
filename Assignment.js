import React from 'react';
import {NavLink} from "react-router-dom";

export class Assignment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            AssignmentList:'',
            AssignmentId:'',
            Title:'',
            Description:'',
            DueDate:'',
        }
    }

    GetDetails(){
        this.setState({
            AssignmentId: this.props.AssignmentId,
            Title: this.props.Title,
            Description: this.props.Description,
            DueDate: this.props.DueDate
        });
        this.props.triggerParentDetails(this.props.AssignmentId);
        this.props.triggerParentSubmissionList(this.props.AssignmentId);
    }

    render(){
        return(
            <div>
                <li className="active assignment" onClick={() => this.GetDetails()}>
                    <NavLink exact activeClassName="activeNav" to="/">
                        <h4>{this.props.AssignmentName}</h4>
                        <div>{this.props.DueDate}</div>
                    </NavLink>
                </li>
            </div>
        );
    }
}
