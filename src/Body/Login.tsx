import styled from 'styled-components';
import React, { Component } from 'react';

const UserInput = styled.input`
    position:absolute;
    border-radius:5px;
    height:5vh;
    top: 15%;
    width:40vh;
`
const PasswordInput = styled.input`
    position:absolute;
    border-radius:5px;
    height:5vh;
    top: 35%;
    width:40vh;
`

const Button = styled.button`
    width : 30vh;
`

const Parentdiv = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

// const validate = (_username: String, _pass: any) => {

//     if (_username.length < 5 && _username.length > 10) {
//         return 'Invalid Username';
//     }

//     if (_pass) {
//         let splitPass = _pass.split('');
//         if (splitPass.length < 5) {
//             return 'need min of 5 characters';
//         }
//         splitPass.forEach((_val: String | Number | any, _index: number) => {

//             _val.charCodeAt(_index) > 80 ? 'caps' : 'small'
//         })
//         return 'Password should contain atleast one character, one number';
//     }

//     // Validate with server whether username already exists

//     async () => {
//         await fetch('').then(() => {

//         })
//     }

//     // if _username is availale
// }

const sendLoginRequest = (_userName:String,_pass:any) => {
    // Post request...!
}

export default class Login extends Component {

    onchange(e:any){
        console.log(e.target.value);
    }

    submitLogin() {

        console.log('..!');

        const usernameVal = document.getElementById('userName');
        const passVal = document.getElementById('pas');

        console.log('..!',usernameVal);
        console.log('..!',passVal);

        // if(usernameVal!='' && passVal!=''){
        //     sendLoginRequest(usernameVal,passVal)
        // }

        //validate(usernameVal, passVal);
    }

    shouldComponentUpdate(){
        return false;
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Parentdiv>
                <input type='text' name='username' onChange={this.onchange.bind(this)}/>
                <PasswordInput type='password' id='pas' onChange={this.onchange.bind(this)}></PasswordInput>
                <Button onClick={this.submitLogin.bind(this)}>Submit</Button>
            </Parentdiv>
        )
    }
}
