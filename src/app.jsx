const contentNode = document.getElementById('contents')

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );

  }
}

class IssueTable extends React.Component {
  render() {
    const borderedStyle = {border: "1px solid blue",padding: 6};
    const bgStyle = {backgroundColor: 'red'};
    return (
      <table style={{borderCollapse:"collapse"}}>
      <thead>
      <tr>
        <th style={borderedStyle}>Id</th>
        <th style={borderedStyle}>Title</th>
      </tr>
      </thead>
      <tbody>

        <IssueRow style={bgStyle} issue_id={1}>Error in console when clicking Add</IssueRow>
        <IssueRow style={bgStyle} issue_id={2}>Missing bottom <b>border</b> on panel</IssueRow>
      </tbody>
      </table>
    );

  }
}

class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue add.</div>
    );

  }
}

class IssueList extends React.Component {
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr/>
        <IssueAdd />
      </div>
    );

  }
}

class IssueRow extends React.Component {
  render() {
    const borderedStyle = {border: "1px solid red",padding: 4};
    /*propTypes = {
        issue_id: React.PropTypes.number.isRequired,
        issue_title: React.PropTypes.string
    };
    static get propTypes(){
      return {
        issue_id: React.PropTypes.number.isRequired,
        issue_title: React.PropTypes.string
      };
    };*/
    return (
      <tr>
        <td style={borderedStyle}>{this.props.issue_id}</td>
        <td style={borderedStyle}>{this.props.children}</td>
      </tr>
    );

  }
}

ReactDOM.render(<IssueList />, contentNode);
