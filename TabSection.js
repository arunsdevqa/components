import React from 'react';
import {AssignmentDetails} from "./AssignmentDetails";
import Moment from 'react-moment';
import { SubmissionsList } from "./SubmissionsList";

export class TabSection extends React.Component {
    render() {
        //onClick={() => this.refs.submission.GetSubmissionsList()}
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#Assignment">Assignment</a></li>
                    <li onClick={()=>this.props.SubmissionsList}><a data-toggle="tab" href="#Submissions">Submissions</a></li>
                </ul>
                <div className="tab-content">
                    <AssignmentDetails
                        title={this.props.title}
                        desc={this.props.desc}
                        duedate={<Moment format="MMM DD, YYYY" date={this.props.duedate}/>}
                    />
                    <div id="Submissions" className="tab-pane fade">
                        <SubmissionsList
                            AssignmentId={this.props.AssignmentId}
                            CreatorId={this.props.CreatorId}
                            ref="submission"
                            SubmissionsList={this.props.SubmissionsList}
                        />
                    </div>
                </div>
            </div>
        )
    }
}