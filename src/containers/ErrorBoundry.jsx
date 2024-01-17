import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
        })
    }

  render() {
    if (this.state.hasError)
    {
        return (
            <div className="inline-grid">
                <h1 className="font-sans bg-red-950">ATTENTION!!! ErrorBoundry caught an error</h1>
            </div>
        )
    }
    return (this.props.children)
  }
}

export default ErrorBoundry;
