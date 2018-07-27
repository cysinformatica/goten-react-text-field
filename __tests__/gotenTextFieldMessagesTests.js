import React from 'react'
import renderer from 'react-test-renderer'

import { GotenTextField } from '../src'

describe('GotenTextField error messages', () => {
    const classNameErrorLabel = 'error-message col'
    const classNameErrorInput = 'error'

    it('wrong pattern with message', async () => {
        const type = 'text'
        const label = 'Text'
        const pattern = '[0-9][a-z]*'
        const value = 'Wrong pattern'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                type={type}
                showError={true}
                pattern={pattern}
                value={value}
            />
        )
        await gotenTextField.getInstance().validate()
        const gotenClassNameInput = gotenTextField.root.findByType('input').props.className
        let gotenLabelError = false
        try {
            gotenLabelError = gotenTextField.root.findByProps({ className: classNameErrorLabel })
            gotenLabelError = gotenLabelError.children[0] !== ''
        } catch (err) { }
        let expectedResult = {
            gotenLabelError: true,
            gotenClassNameInput: true
        }
        let result = {
            gotenLabelError: gotenLabelError,
            gotenClassNameInput: gotenClassNameInput.includes(classNameErrorInput)
        }
        expect(result).toEqual(expectedResult)
    })

    it('wrong pattern without message', async () => {
        const type = 'text'
        const label = 'Text'
        const pattern = '[0-9][a-z]*'
        const value = 'Wrong pattern'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                type={type}
                pattern={pattern}
                value={value}
            />
        )
        await gotenTextField.getInstance().validate()
        const gotenClassNameInput = gotenTextField.root.findByType('input').props.className
        let gotenLabelError = false
        try {
            gotenLabelError = gotenTextField.root.findByProps({ className: classNameErrorLabel })
            gotenLabelError = gotenLabelError.children[0] !== ''
        } catch (err) { }
        let expectedResult = {
            gotenLabelError: false,
            gotenClassNameInput: false
        }
        let result = {
            gotenLabelError: gotenLabelError,
            gotenClassNameInput: gotenClassNameInput.includes(classNameErrorInput)
        }
        expect(result).toEqual(expectedResult)
    })

    it('correct pattern with message', async () => {
        const type = 'text'
        const label = 'Text'
        const pattern = '[0-9][a-z]*'
        const value = '3test'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                type={type}
                showError={true}
                pattern={pattern}
                value={value}
            />
        )
        await gotenTextField.getInstance().validate()
        const gotenClassNameInput = gotenTextField.root.findByType('input').props.className
        let gotenLabelError = false
        try {
            gotenLabelError = gotenTextField.root.findByProps({ className: classNameErrorLabel })
            gotenLabelError = gotenLabelError.children[0] !== ''
        } catch (err) { }
        let expectedResult = {
            gotenLabelError: false,
            gotenClassNameInput: false
        }
        let result = {
            gotenLabelError: gotenLabelError,
            gotenClassNameInput: gotenClassNameInput.includes(classNameErrorInput)
        }
        expect(result).toEqual(expectedResult)
    })

    it('wrong pattern without message', async () => {
        const type = 'text'
        const label = 'Text'
        const pattern = '[0-9][a-z]*'
        const value = 'Wrong pattern'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                type={type}
                pattern={pattern}
                value={value}
            />
        )
        await gotenTextField.getInstance().validate()
        const gotenClassNameInput = gotenTextField.root.findByType('input').props.className
        let gotenLabelError = false
        try {
            gotenLabelError = gotenTextField.root.findByProps({ className: classNameErrorLabel })
            gotenLabelError = gotenLabelError.children[0] !== ''
        } catch (err) { }
        let expectedResult = {
            gotenLabelError: false,
            gotenClassNameInput: false
        }
        let result = {
            gotenLabelError: gotenLabelError,
            gotenClassNameInput: gotenClassNameInput.includes(classNameErrorInput)
        }
        expect(result).toEqual(expectedResult)
    })
})