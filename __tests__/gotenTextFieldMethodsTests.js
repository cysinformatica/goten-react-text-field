import React from 'react'
import renderer from 'react-test-renderer'

import { GotenTextField } from '../src'


describe('GotenTextField validate tests', () => {
    const regex = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        number: /^-?[0-9]+(.[0-9]+)?$/,
        date: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        time: /^[0-9]{2}:[0-9]{2}$/,
        url: /^[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
        password: /./,
        text: /./
    }
    const defaultIsRequiredMessage = '* is required'
    const defaultTypeErrorMessage = '{label} must be a {type}'
    let error = {
        error: false,
        errorMessage: ''
    }

    beforeEach(() => {
        error = {
            error: false,
            errorMessage: ''
        }
    })

    it('type text', () => {
        const type = 'text'
        const label = 'Text'
        const value = 'it is a value'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type email', () => {
        const type = 'email'
        const label = 'Email'
        const value = 'test@validMail.com'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type number', () => {
        const type = 'number'
        const label = 'Number'
        const value = '123456'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type time', () => {
        const type = 'time'
        const label = 'Time'
        const value = '02:27'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type url', () => {
        const type = 'url'
        const label = 'Url'
        const value = 'www.test_valid.com'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type password', () => {
        const type = 'password'
        const label = 'Password'
        const value = 'Test123456'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type invalid', () => {
        const type = 'invalid'
        const label = 'Invalid'
        const value = 'it is a value'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex['text'].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('customized pattern', () => {
        const type = 'text'
        const label = 'Customized pattern'
        const value = '14/06/2018'
        const pattern = '[0-9]{2}\/[0-9]{2}\/[0-9]{4}'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
                pattern={pattern}
            />
        ).getInstance()
        const result = new RegExp(pattern).test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        let aux = gotenTextField.validate()
        expect(error).toEqual(aux)
    })

    it('required true with value', () => {
        const type = 'text'
        const label = 'Required True'
        const value = 'It is a value'
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
                required={true}
            />
        ).getInstance()
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type email with invalid pattern', () => {
        const type = 'email'
        const label = 'Email'
        const value = 'validMail.com'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type number with invalid pattern', () => {
        const type = 'number'
        const label = 'Number'
        const value = 'number'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type time with invalid pattern', () => {
        const type = 'time'
        const label = 'Time'
        const value = '00/00/0000'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('type url with invalid pattern', () => {
        const type = 'url'
        const label = 'Url'
        const value = 'test'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('customized pattern with invalid pattern', () => {
        const type = 'text'
        const label = 'Customized pattern'
        const value = 'this pattern is invalid'
        const pattern = '[0-9]{2}\/[0-9]{2}\/[0-9]{4}'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value={value}
                label={label}
                type={type}
                pattern={pattern}
            />
        ).getInstance()
        const result = new RegExp(pattern).test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('required true', () => {
        const type = 'text'
        const label = 'Required True'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                type={type}
                required={true}
            />
        ).getInstance()
        error = {
            error: true,
            errorMessage: defaultIsRequiredMessage
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('required true wit wrong pattern', () => {
        const type = 'email'
        const label = 'Required True'
        const value = 'Wrong pattern'
        const errorMessage = defaultTypeErrorMessage.replace('{type}', type).replace('{label}', label)
        const gotenTextField = renderer.create(
            <GotenTextField
                value = {value}
                label={label}
                type={type}
                required={true}
            />
        ).getInstance()
        const result = regex[type].test(value)
        if (!result) {
            error = {
                error: true,
                errorMessage: errorMessage
            }
        }
        expect(error).toEqual(gotenTextField.validate())
    })

    it('required True and errorRequiredMessage', () => {
        const type = 'email'
        const label = 'Required True'
        const errorRequiredMessage = 'Test errorRequiredMessage prop'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                type={type}
                required={true}
                errorRequiredMessage={errorRequiredMessage}
            />
        ).getInstance()
        error = {
            error: true,
            errorMessage: errorRequiredMessage
        }
        expect(error).toEqual(gotenTextField.validate())
    })
})