import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default class ProtectedRoute extends Component<{}, { token: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: "",
    };
  }
  render() {
    return this.state.token ? <Outlet /> : <Navigate to={"/Login"} />;
  }
}
