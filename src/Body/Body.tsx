import React, { Component, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DefaultMessage = styled.div`
    display:flex;
    place-items:center;
    justify-content:center;
    height:90%;
    background:#4749717d;
`
interface alchoholInterface {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

interface Props {
    drinks?: Array<alchoholInterface> & JSX.IntrinsicAttributes;
}

class Body extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {

        const { drinks } = this.props;

        return (
            drinks ? <RenderDrinksData val={drinks} /> : <DefaultMesg msg={''} />
        )
    }
}

type messageInterface = {
    msg: string;
}

const RenderDrinksData = ({val}: any) => {
    console.log('val = ',val);
    return (
        <>
            {
                val.map((objectData: alchoholInterface) => {
                    return <img key={objectData.idDrink} src={objectData.strDrinkThumb} style={{ height: '50%' }}></img>
                })
            }
        </>
    )
}

const DefaultMesg = ({ msg: string }: messageInterface) => {

    return (
        <DefaultMessage>
            {' No Drinks Available...!'}
        </DefaultMessage>
    )
}

export default connect()(Body)