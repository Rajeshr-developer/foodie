import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.button`
    width:25%;
    display:flex;
    color:white;
    place-items:center;
    font-size:1.3em;
    border-radius:10px;
    justify-content:center;
    background-image: linear-gradient(#141E30, #243B55);
    font-family:SFBigWhiskey;
    cursor:pointer;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    border:2px solid black;
`
interface Props {
    readonly titlename?: String;
    onSelect?:any;
}

export const Title = ({ onSelect, titlename }: Props) => (
    <TitleBlock onClick={onSelect}>
        {titlename}
    </TitleBlock>
)