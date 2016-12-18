import React from 'react';
import App from '../components/App';

const loadData = () => fetch('/api/data').then(response => response.json());

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proverb: '',
      loading: false
    }
  }
  componentDidMount() {
    this.__refresh();
  }
  render() {
    return <App {...this.state} onNext={() => this.__refresh()} />;
  }
  __refresh() {
    this.setState({ loading: true });
    loadData()
      .then(proverb => this.setState({ loading: false, proverb }))
      .catch(() => this.setState({ loading: false }));
  }
}
