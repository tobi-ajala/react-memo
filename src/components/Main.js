import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import toastr from 'toastr';

import { getIdeas, createIdea, deleteIdea, updateIdea } from '../actions';
import Idea from './Idea';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getIdeas();
  }

  createIdea = () => {
    this.props.createIdea();
    return this.props.getIdeas();
  };

  deleteIdea = (id) => {
    this.props.deleteIdea(id);
    return this.props.getIdeas();
  };

  updateIdea = (idea) => {
    this.props.updateIdea(idea);
    return toastr.success('Edits have been successfully saved');
  };

  render() {
    const ideaList = this.props.ideas.map((idea, index) => {
      return <Idea idea={idea} key={index} del={() => this.deleteIdea(idea.id)} edit={(newIdea) => this.updateIdea(newIdea)} />;
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="pull-right">
            <button type="button" className="btn btn-default btn-lg" onClick={this.createIdea}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div className="row">{ideaList}</div>
      </div>
    );
  }
}

HomePage.propTypes = {
  ideas: React.PropTypes.array.isRequired,
  getIdeas: React.PropTypes.func.isRequired,
  createIdea: React.PropTypes.func.isRequired,
  deleteIdea: React.PropTypes.func.isRequired,
  updateIdea: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { ideas: state.ideas };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => { dispatch(getIdeas()); },
    createIdea: () => { dispatch(createIdea()); },
    deleteIdea: (id) => { dispatch(deleteIdea(id)); },
    updateIdea: (idea) => { dispatch(updateIdea(idea)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
