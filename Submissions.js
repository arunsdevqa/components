import React from 'react';
import ReactDOM from 'react-dom';

export class Submissions extends React.Component{
    constructor(){
        super();
        this.state = {
            glyphIcon:'glyphicon glyphicon-chevron-down'
        }
    }

    glyphIcon(){
        if(this.state.glyphIcon === 'glyphicon glyphicon-chevron-down'){
            this.setState({
                glyphIcon: 'glyphicon glyphicon-chevron-up'
            });
        }
        else {
            this.setState({
                glyphIcon: 'glyphicon glyphicon-chevron-down'
            });
        }
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading col-md-12">
                    <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href={"#"+this.props.Id}>
                            <div className="col-md-2">
                                <img src={this.props.Image} />
                            </div>
                            <div className="col-md-8">
                                <div>{this.props.Name}</div>
                                <div>{this.props.TurnedIn}</div>
                            </div>
                            <div className="col-md-2">
                                <span className={this.state.glyphIcon} onClick={() => this.glyphIcon()}></span>
                            </div>
                        </a>
                    </h4>
                </div>
                <div id={this.props.Id} className="panel-collapse collapse">
                    <div className="panel-body">
                        {this.props.Content}
                    </div>
                </div>
            </div>
        );
    }
}