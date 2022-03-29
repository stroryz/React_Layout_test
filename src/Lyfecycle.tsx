import React from 'react';

interface ILyfecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: false;
}

export class Lyfecycle extends React.Component<ILyfecycleProps, ILifecycleState> {
  constructor(props: ILyfecycleProps) {
    super(props);

    this.state = {stateField: 0, isMounted: false, hasError: false};
    // this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props: Readonly<ILyfecycleProps>, state: Readonly<ILifecycleState>) {
    return { stateField: props.someProp };
    // return null;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // Не использовать при PureComponent
  public shouldComponentUpdate(
    nextProps:Readonly<ILyfecycleProps>,
    nextState:Readonly<ILifecycleState>,
    nextContext: any
  ): boolean{
    // return this.state != nextState || this.props != nextProps;
    return false;
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }
    // return <div onClick={this.handleClick}>1</div>
    return <div>1</div>
  }

  public getSnapshotBeforeUpdate(
    nextProps:Readonly<ILyfecycleProps>,
    nextState:Readonly<ILifecycleState>
  ): any | null{
    // return 1234;
    return null;
  }

  public componentDidUpdate(
    nextProps:Readonly<ILyfecycleProps>,
    nextState:Readonly<ILifecycleState>,
    snapshot?: any
  ) {
    if (snapshot > 1000) {
      this.setState({});
    }
  }

  public componentDidMount() {
    // document.addEventListener('resize', () => {});
    // setTimeout(() => {}, 0);
    // this.setState({ isMounted: true });
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // logError(errorInfo.componentStack)
  }

  public componentWillUnmount() {
    // document.removeEventListener('resize', () => {});
  }

  // private handleClick = () => {
  //   this.setState({stateField: 1})
  // }
}
