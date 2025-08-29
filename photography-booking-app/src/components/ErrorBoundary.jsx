// src/components/ErrorBoundary.jsx
import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(p){ super(p); this.state = { err: null }; }
  static getDerivedStateFromError(err){ return { err }; }
  componentDidCatch(err, info){ console.error(err, info); }
  render(){
    if (this.state.err) {
      return (
        <div style={{ padding: 24 }}>
          <h2>Something went wrong.</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.err.message || this.state.err)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
