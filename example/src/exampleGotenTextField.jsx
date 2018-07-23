import React, { Component } from 'react'
import { GotenTextField } from '../../src'

import './exampleGotenTextField.css'

const stateExampleGotenTextField = {
    changeOnPress: true
}

export default class ExampleGotenTextField extends Component {
    constructor(props) {
        super(props)
        this.state = stateExampleGotenTextField
        this.refsGotenTextFieldWithPattern = React.createRef()
        this.refsGotenTextField = {}
        this.gotenTextFields = {}
        this.refsGotenTextFieldMultiline = React.createRef()
    }

    separator(cant=1) {
        let arrBr = []
        for (let index = 0; index < cant; index++) {
            arrBr[index] = <br key={index}/>
        }
        return(
            <div>
                { arrBr }
            </div>
        )
    }

    addGotenTextFieldRef(name, element) {
        this.refsGotenTextField[name] = element
    }

    getRow(label, addedText=''){
        const type = label.toLowerCase()
        const id = type + addedText
        return (
            <tr>
                <th className='item'>
                    <GotenTextField
                        placeholder={'insert a ' + type + '...'}
                        label={label}   // Example: 'Insert Name'
                        type={type}     // Example: 'text'
                        bindContainer={this.gotenTextFields}
                        bindProp={id}
                        ref={(element) => this.addGotenTextFieldRef(id, element)}
                    />
                </th>
                <th className='item'>
                    <GotenTextField
                        placeholder={'insert a ' + type + '...'}
                        label={label}   // Example: 'Insert Mail'
                        type={type}     // Example: 'email'
                        showError={true}
                        bindContainer={this.gotenTextFields}
                        bindProp={id + 'show'}
                        ref={(element) => this.addGotenTextFieldRef(id + 'show', element)}
                    />
                </th>
                <th className='item'>
                    <GotenTextField
                        placeholder={'insert a ' + type + '...'}
                        label={label + ' Required'}
                        type={type}
                        required={true}
                        showError={true}
                        bindContainer={this.gotenTextFields}
                        bindProp={id + 'showAndRequired'}
                        ref={(element) => this.addGotenTextFieldRef(id + 'showAndRequired', element)}
                    />
                </th>
            </tr>
        )
    }

    onClickValidate = (event) => {
        for (const key in this.refsGotenTextField) {
            if(!key.includes('form')) {
                this.refsGotenTextField[key].validate()
            }
        }
    }

    onClickValidateForm = (event) => {
        for (const key in this.refsGotenTextField) {
            if (key.includes('form')) {
                this.refsGotenTextField[key].validate()
            }
        }
    }

    render() {
        return (
            <div>
                <div className='title'> GotenTextField without form tag</div>
                <table className= 'table'>
                    <tbody>
                        {this.getRow('Text')}
                        {this.getRow('Url')}
                        {this.getRow('Password')}
                        {this.getRow('Email')}
                        {this.getRow('Number')}
                        {this.getRow('Time')}
                        {this.getRow('InvalidType')}
                    </tbody>
                </table>
                {this.separator()}
                <input
                    type='submit'
                    value='Validate'
                    onClick={this.onClickValidate}
                />
                {this.separator(2)}
                <form>
                    <div className='title'> GotenTextField with form tag</div>
                    <table className='table'>
                        <tbody>
                            {this.getRow('Text', 'form')}
                            {this.getRow('Url', 'form')}
                            {this.getRow('Password', 'form')}
                            {this.getRow('Email', 'form')}
                            {this.getRow('Number', 'form')}
                            {this.getRow('Time', 'form')}
                            {this.getRow('InvalidType', 'form')}
                        </tbody>
                    </table>
                    {this.separator()}
                    <input
                        type='submit'
                        value='Validate'
                        onClick={this.onClickValidateForm}
                    />
                </form>
                {this.separator(2)}
                <GotenTextField
                    placeholder={'Insert a text...'}
                    componentLabel={
                        <div className='title'> GotenTextField Multiline</div>
                    }
                    multiline={true}
                    type={'text'}
                    errorMessage={'Please inset a text using the correct pattern'}
                    errorRequiredMessage={'This field is required'}
                    required={true}
                    showError={true}
                    ref={this.refsGotenTextFieldMultiline}
                />
                <input
                    type='submit'
                    value='Validate And Show Input'
                    onClick={() => {
                        this.refsGotenTextFieldMultiline.current.validate()
                    }}
                />
                {this.separator(2)}
                <div className='title'> GotenTextField with pattern</div>
                <table>
                    <tbody>
                        <tr>
                            <th className='item'>
                                <GotenTextField
                                    placeholder={'[0-9]{2}\/[0-9]{2}\/[0-9]{4}'}
                                    label={'Date Pattern'}
                                    type={'text'}
                                    pattern={'[0-9]{2}\/[0-9]{2}\/[0-9]{4}'}
                                    errorMessage={'Please inset a text using the correct pattern'}
                                    errorRequiredMessage={'This field is required'}
                                    required={true}
                                    showError={true}
                                    bindContainer={this.gotenTextFields}
                                    bindProp={'pattern'}
                                    ref={this.refsGotenTextFieldWithPattern}
                                />          
                            </th>
                            <th className='item'>
                                <div className='message'>{this.gotenTextFields.pattern}</div>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <input
                    type='submit'
                    value='Validate And Show Input'
                    onClick={() => {
                        this.setState({changeOnPress: !this.state.changeOnPress})
                        this.refsGotenTextFieldWithPattern.current.validate()
                    }}
                />
                {this.separator(2)}
                <GotenTextField
                    placeholder={'Label personalizado'}
                    componentLabel={
                        <div style={{color: 'green'}}>
                            Label personalizado
                        </div>
                    }
                    type={'text'}
                    errorMessage={'Please inset a text using the correct pattern'}
                    errorRequiredMessage={'This field is required'}
                    required={true}
                    showError={true}
                />
            </div>
        )
    }
}