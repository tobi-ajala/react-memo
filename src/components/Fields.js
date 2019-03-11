import React from 'react';
import { connect } from 'react-redux';

export default class Fields extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      titleEdit: false,
      bodyEdit: false,
      title: this.props.idea.title ? this.props.idea.title : 'Card #'+(this.props.idea.id+1),
      body: this.props.idea.body ? this.props.idea.body : 'Add description'
    });
  }

  toggleTitleField = () => this.setState({ titleEdit: !this.state.titleEdit });

  toggleBodyField = () => this.setState({ bodyEdit: !this.state.bodyEdit });

  onChangeTitle = (event) => this.setState({ title: event.currentTarget.value });

  onChangeBody = (event) => this.setState({ body: event.currentTarget.value });

  submitOnBlur = () => {
    this.props.edit({
      ...this.props.idea,
      title: (this.state.titleEdit ? this.state.title : this.props.idea.title),
      body: (this.state.bodyEdit ? this.state.body : this.props.idea.body)
    });
    this.setState({ titleEdit: false, bodyEdit: false });
  }

  render() {
    return (
      <div>
        {this.state.titleEdit ?
          <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} onBlur={this.submitOnBlur} />
        :
          <h3 onClick={this.toggleTitleField}>{this.state.title}</h3>
        }
        {this.state.bodyEdit ?
          <div>
            <input type="text" className="form-control" placeholder={this.state.body} name="body" onChange={this.onChangeBody} onBlur={this.submitOnBlur} />
            {this.state.body.length<15 ?
              <p className="body-counter">{this.state.body.length}</p>
            : null}
          </div>
        :
          <p onClick={this.toggleBodyField}>{this.state.body}</p>
        }
      </div>
    );
  }
}

Fields.propTypes = {
  idea: React.PropTypes.object.isRequired,
  edit: React.PropTypes.func.isRequired
};
