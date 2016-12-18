import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 'clarke'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Who is your teacher?
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="clarke">Ms. Clarke</option>
              <option value="perkins">Ms. Perkins</option>
              <option value="knope">Ms. Knope</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <label>
            What is your number?
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
