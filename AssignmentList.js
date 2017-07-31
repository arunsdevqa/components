import React from 'react';
import {Assignment} from "./Assignment";
import Moment from 'react-moment';

export class AssignmentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            AssignmentList:'',
            AssignmentId:'',
            Title:'',
            Description:'',
            DueDate:'',
            CreatorId:'',
        }
    }
    getAssignmentDetails(id) {
        var data = this.state.AssignmentList;
        //this.props.details(id);
        this.props.AssignmentList(id, data);
    }
    getSubmissionList(AssignmentId, CreatorId) {
        this.props.SubmissionList(AssignmentId, CreatorId);
    }
    componentDidMount(){
        fetch("https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d")
            .then((response) =>
            response.json().then((data) =>{
                var arrData = [];
                for(var item in data){
                    arrData.push(data[item]);
                }
                this.setState({
                    AssignmentList: arrData
                });
            })
        )
    }
    render(){
        let AssignmentList = this.state.AssignmentList;
        return(
            <div>
                <nav className="navbar navbar-default sidebar" role="navigation">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {
                                    AssignmentList &&
                                    AssignmentList.map((assignment)=>{
                                        return (<Assignment key={assignment.id}
                                                            AssignmentId = {assignment.id}
                                                            AssignmentName={assignment.title}
                                                            DueDate={<Moment format="MMM DD, YYYY" date={assignment.due_at}/>}
                                                            Description={assignment.description}
                                                            triggerParentDetails={() => this.getAssignmentDetails(assignment.id)}
                                                            triggerParentSubmissionList={() => this.getSubmissionList(assignment.id, assignment.creator.id)}
                                                            CreatorId = {assignment.creator.id}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
