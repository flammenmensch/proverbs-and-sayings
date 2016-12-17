import React from 'react';
import App from '../components/App';

const loadData = () => fetch('/api/data').then(response => response.json());

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proverb: ''
    }
  }
  componentDidMount() {
    this.__refresh();
  }
  render() {
    return <App proverb={this.state.proverb} onNext={() => this.__refresh()} />;
  }
  __refresh() {
    loadData().then(proverb => this.setState({ proverb }));
  }
}
