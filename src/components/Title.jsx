const React = require('react');

const Title = ({ data: { text } }) => (
  <h1 className="blurb blurb-title">{text}</h1>
);

class TitleEditMode extends React.Component {

  constructor(props) {
    super(props);

    const { data: { text } } = props;

    this.state = {
      data: { text }
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { updateData } = this.props;
    this.setState({
      data: { text: event.target.value }
    },
      () => updateData(this.state.data)
    );
  }

  render() {
    const { data: { text } } = this.state;
    return <input
      className="blurb blurb-title"
      type="text"
      value={text}
      onChange={this.onChange} />
  }

}

Title.propTypes = {
  data: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired
  })
};

TitleEditMode.propTypes = {
  data: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired
  }),
  updateData: React.PropTypes.func
  // onSave: React.PropTypes.func.isRequired
};

exports.TitleEditMode = TitleEditMode;
exports.Title = Title;
