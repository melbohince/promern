const contentNode = document.getElementById('contents')

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );

  }
}

const issues = [
  {id: 1, status: 'Open', owner: 'Ravan', created: new Date('2016-08-15'), effort: 5, completionDate: undefined, title: 'Error in console when clicking Add',},
  {id: 2, status: 'Assigned', owner: 'Eddie', created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'), title: 'Missing bottom border on panel',},
];

function IssueTable(props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)

    return (
      <table className="bordered-table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Status</th>
        <th>Owner</th>
        <th>Created</th>
        <th>Effort</th>
        <th>Completion Date</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
      </table>
    );
}
//before
const IssueRow = (props) => (
  <tr>
    <td>{props.issue.id}</td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created.toDateString()}</td>
    <td>{props.issue.effort}</td>
    <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
    <td>{props.issue.title}</td>
  </tr>
)


class IssueAdd extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    });
    // clear the form for the next input
    form.owner.value = ""; form.title.value = "";
  }

  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="Owner" />
        <input type="text" name="title" placeholder="Title" />
        <button>Add Issue</button>
        <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
        </form>
      </div>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues:[] };
    this.createIssue = this.createIssue.bind(this);
    //this.createTestIssue = this.createTestIssue.bind(this);  //mutiple binds can be eliminated
    //setTimeout(this.createTestIssue.bind(this), 2000); or
    //setTimeout(() = > {this.createTestIssue()}, 2000);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice(); //make a copy of the array
    newIssue.id =  this.state.issues.length + 1;  //give it an id
    newIssues.push(newIssue); //add the pama as a new item in the array
    this.setState({ issues: newIssues}); //replace old state with new state, the view will rerender itself
  }

  // createTestIssue() {
  //   this.createIssue({
  //     status: 'New', owner: 'Pieta', created: new Date(), title: 'Completion date should be optional',
  //   });
  // }

  componentDidMount(){
    this.loadData();
  }

  loadData(){
    setTimeout( () => {
      this.setState({ issues: issues});
    },500);
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />

        <hr/>
        <IssueAdd createIssue={this.createIssue} />
      </div>
    );
  }
}



ReactDOM.render(<IssueList />, contentNode);
