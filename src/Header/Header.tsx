import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Body from '../Body/Body';
import { Title } from './Titles';

import { asyncReducer } from '../Reducers/rootReducer';

const titles = ["Alcoholic", "Non Alcoholic", "Ordinary Drink", "Cocktail"];

export const HeaderBar = styled.div`
    height:10vh;
    position:fixed;
    width:100%;
    display:flex;
    background:black;
`
interface headerProps {
    dispatch: any;
    jsonData: any;
}

const mapStateToProps = (state: any) => {
    return {
        jsonData: state.jsonData
    }
}

class Header extends Component<headerProps>{

    constructor(props: any) {
        super(props);
    }

    state = {
        jsonData: null
    }

    titleSelected() {
        this.props.dispatch(asyncReducer());
    }

    componentDidMount() {
        console.log('[ Header ] mounted..!')
    }

    shouldComponentUpdate(preProp: any, nextState: any) {
        if(this.props.jsonData!=nextState)return true;
        return false;
    }

    render(): JSX.Element {
        console.log('[ render ] - Header');
        return (
            <>
                <HeaderBar>
                    {
                        titles.map((_name) => {
                            return <Title key={_name} titlename={_name} onSelect={this.titleSelected.bind(this)}></Title>
                        })
                    }
                </HeaderBar>
                <Body drinks={this.props.jsonData.drinks} />
            </>
        )
    }
}

export default connect(mapStateToProps)(Header)