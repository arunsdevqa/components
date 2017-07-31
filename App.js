import React from 'react';
import {AssignmentList} from './AssignmentList';
import {TabSection} from './TabSection';

export class App extends React.Component{
    constructor(){
        super();
        this.state = {
            AssignmentList:'',
            AssignmentId:'',
            Title:'',
            Description:'',
            DueDate:'',
            CreatorId: '',
            SubmissionsList:''
        }
    }

    AssignmentList(id, data){
        data.map((item) => {
            if(id === item.id){
                this.setState({
                    AssignmentId: item.id,
                    Title: item.title,
                    Description: item.description,
                    CreatorId: item.creator.id
                });
            }
        });
    }
    GetSubmissionsList(AssignmentId, CreatorId) {
        fetch("https://api.edmodo.com/assignment_submissions?assignment_id=" + AssignmentId + "&assignment_creator_id=" + CreatorId + "&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d")
        .then((response) =>
            response.json().then((data) => {
                var arrData = [];
                for (var item in data) {
                    arrData.push(data[item]);
                }
                this.setState({
                    SubmissionsList: arrData
                });
            })
        )
    }

    render(){
        return (
            <div>
                <div className="well">
                    <button type="button"
                            className="btn btn-success"
                            data-toggle="modal"
                            data-target="#myModal">Create Assignment</button>
                </div>

                <div className="col-sm-4">
                    <div className="panel panel-default">
                        <div className="label-info panel-body">Assignments</div>
                    </div>
                    <AssignmentList
                        AssignmentList={(id, data) => this.AssignmentList(id, data)}
                        SubmissionList={(AssignmentId, CreatorId)=>this.GetSubmissionsList(AssignmentId, CreatorId)}
                    />
                </div>
                <div className="col-sm-8">
                    <TabSection
                        title={this.state.Title}
                        desc={this.state.Description}
                        duedate={this.state.DueDate}
                        AssignmentId={this.state.AssignmentId}
                        CreatorId={this.state.CreatorId}
                        SubmissionsList={this.state.SubmissionsList}
                    />
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add New Assignment</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="usr">Title</label>
                                        <input type="text" className="form-control" id="txtAssignmentTitle" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Description</label>
                                        <textarea className="form-control" rows="5" id="txtDescription"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}