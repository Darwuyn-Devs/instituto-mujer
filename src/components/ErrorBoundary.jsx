import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("🛑 ErrorBoundary capturó un error:", error, errorInfo);
    // Aquí podrías integrarte con Sentry, LogRocket o tu sistema de logging
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-700 bg-red-100 rounded-md shadow-sm">
          <h1 className="text-2xl font-bold">Algo salió mal.</h1>
          <p className="mt-2">
            {this.state.error?.message || "Error desconocido. Por favor, recarga la página o intenta más tarde."}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
