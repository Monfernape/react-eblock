import React, { Component } from 'react'

interface IState {
    hasError: boolean 
    info: string
}

interface IProps {
    children: React.ReactNode
}

class Logger extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = { hasError: false, info: ""}
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(err: Error, info: React.ErrorInfo) {
        console.log('Error', err, 'Info', info)
    }

    render() {
        if (this.state.hasError) {
            return <div>ERROR SCREEN</div>;
        }
        return this.props.children;
    }
}

export default Logger;
