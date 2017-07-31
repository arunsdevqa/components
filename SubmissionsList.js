import React from 'react';
import {Submissions} from './Submissions';

export class SubmissionsList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            CreatorId: props.CreatorId,
            AssignmentId: props.AssignmentId
        }
    }

    render(){
        var SubmissionsList = this.props.SubmissionsList;
        return(
            <div className="panel-group" id="accordion">
                {
                    SubmissionsList &&
                    SubmissionsList.map((submission) => {
                        return <Submissions
                            key={submission.id}
                            Name={submission.creator.first_name + " " + submission.creator.last_name}
                            Image={submission.creator.avatars.small}
                            TurnedIn={submission.submitted_at}
                            Content={submission.content}
                            Id={submission.id}
                        />
                    })
                }
            </div>
        );
    }
}