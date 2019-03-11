import React from 'react';
import Fields from './Fields';

export default class Idea extends React.Component {
  static propTypes = {
    idea: React.PropTypes.object.isRequired,
    del: React.PropTypes.func.isRequired,
    edit: React.PropTypes.func.isRequired
  }

  render() {
    const { idea, del, edit } = this.props;
    return (
      <div className="panel panel-primary idea-card">
        <button type="button" className="btn btn-default btn-sm pull-right" onClick={del}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <div className="panel-body">
          <Fields idea={idea} edit={edit} />
          <p>{idea.id} {idea.created_date}</p>
        </div>
      </div>
    );
  }
}
