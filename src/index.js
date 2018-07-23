import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PubSub } from 'pubsub-js'

import './gotenTextField.css'


const defaultValue = ''
const defaultType = 'text'
const defaultIsRequiredMessage = '* is required'
const defaultTypeErrorMessage = '{label} must be a {type}'

const pubsubMessageResponse = '_RESPONSE'

const textInputState = {
    value: defaultValue,
    error: {
        error: false,
        errorMessage: ''
    }
}

const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^-?[0-9]+(.[0-9]+)?$/,
    date: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    time: /^[0-9]{2}:[0-9]{2}$/,
    url: /^[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
    password: /./,
    text: /./
}

export class GotenTextField extends Component {
    constructor(props) {
        super(props)
        this.state = textInputState
        this.state.value = this.props.value ? this.props.value : defaultValue
        this.value = this.state.value
        this.type = this.props.type ? this.props.type : defaultType
        this.input = React.createRef()
        this.subscription = undefined
        this._formRegister()
    }

    _formRegister() {
        if (!this.subscription && this.props._pubsub_message)
            this.subscription = PubSub.subscribe(this.props._pubsub_message, _ => {
                PubSub.publish(this.props._pubsub_message + pubsubMessageResponse, !this.validate().error)
            })
    }

    componentWillUnmount() {
         if (this.subscription)
            PubSub.unsubscribe(this.subscription)
    }
    
    componentDidUpdate(props) {
        if (props.type !== this.props.type)
            this.type = this.props.type
    }

    render() {
        return (
            <div>
                { this.props.label && !this.props.componentLabel &&
                    <label className='label'>{this.props.label + ' '}</label>
                }
                { this.props.componentLabel }
                { this.props.multiline ?
                    React.cloneElement(<textarea />, this._getProps()) :
                    React.cloneElement(<input />, this._getProps())
                }
                <br/>
                { this.props.showError &&
                    <label className='error-message'>{this.state.error.errorMessage}</label>
                }
            </div>
        )
    }

    _getProps() {
        const auxProps = {
            ...this.props,
            className: this.props.className + (this.props.showError && this.state.error.error ? ' error' : ''),
            value: this.state.value,
            onChange: this._onChange,
            type: this.type,
            required: this.props.required,
            ref: this.input,
        }
        const { 
            bindContainer, 
            bindProp,
            componentLabel,
            errorMessage, 
            errorRequiredMessage,
            key,
            label,
            multiline,
            showError, 
            _pubsub_message, 
            ...props 
        } = auxProps
        return props
    }

    _onChange = (event) => {
        this._valueUpdate(event.target.value)
        if (this.props.onChange)
            this.props.onChange(event)
    }

    _valueUpdate(value) {
        new Promise((resolve) => {
            this.setState({ value })
            resolve()
        })
            .then(() => {
                this.value = this.state.value
                if (this.props.bindContainer !== undefined)
                    this.props.bindContainer[this.props.bindProp] = this.value
            })
    }

    validate() {
        const typeRegex = this.props.pattern ? new RegExp(this.props.pattern) : (regex[this.type] ? regex[this.type] : regex[defaultType])
        const defaultTypeSelectedErrorMessage = defaultTypeErrorMessage.replace('{type}', this.type).replace('{label}', this.props.label)
        let error = {
            error: false,
            errorMessage: ''  
        }
        if (this.props.required && this.value === defaultValue) {
            error = {
                error: true,
                errorMessage: this.props.errorRequiredMessage ? this.props.errorRequiredMessage : defaultIsRequiredMessage
            }
        } else if (!this.props.required && this.value === defaultValue) {
            null
        } else if (!typeRegex.test(this.value)) {
            error = {
                error: true,
                errorMessage: this.props.errorMessage ? this.props.errorMessage : defaultTypeSelectedErrorMessage
            }
        }
        this.setState({error})
        return error
    }
}

GotenTextField.propTypes = {
    bindContainer: PropTypes.object,
    bindProp: PropTypes.string,
    componentLabel: PropTypes.element,
    errorMessage: PropTypes.string,
    errorRequiredMessage: PropTypes.string,
    label: PropTypes.string,
    multiline: PropTypes.bool,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    showError: PropTypes.bool,
    type: PropTypes.string
}