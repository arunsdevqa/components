import React from 'react';

export class AssignmentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Assignments: '',
            Title: props.title,
            Description:props.desc,
        }
    }
    render() {
        var self=this;
        return(
            <div id="Assignment" className="tab-pane fade in active">
                <div className="section duedate">Due:{self.props.duedate}</div>
                <h3>{self.props.title}</h3>
                <p>{self.props.desc}</p>
            </div>
        )
    }
}