import React from 'react'
import renderer from 'react-test-renderer'

import { GotenTextField } from '../src'

describe('GotenTextField label', () => {

    it('with multiline false', () => {
        const withoutLabelErrorMessage = 'No instances found with node type: \"undefined\"'
        const gotenTextField = renderer.create(
            <GotenTextField 
                multiline={false}
            />
        )
        let textArea = undefined;
        let input = undefined;
        try {
            textArea = gotenTextField.root.findByType('textarea')
        } catch (error) {
            expect(error.message).toBe(withoutLabelErrorMessage)
        }
        try {
            input = gotenTextField.root.findByType('input')
        } catch (error) {
            expect(false).toBeTruthy()
            return
        }
        expect(textArea).toBeUndefined()
        expect(input).not.toBeUndefined()
    })

    it('with multiline true', () => {
        const withoutLabelErrorMessage = 'No instances found with node type: \"undefined\"'
        const gotenTextField = renderer.create(
            <GotenTextField
                multiline={true}
            />
        )
        let textArea = undefined;
        let input = undefined;
        try {
            input = gotenTextField.root.findByType('input')
        } catch (error) {
            expect(error.message).toBe(withoutLabelErrorMessage)
        }
        try {
            textArea = gotenTextField.root.findByType('textarea')
        } catch (error) {
            expect(false).toBeTruthy()
            return
        }
        expect(input).toBeUndefined()
        expect(textArea).not.toBeUndefined()
    })

    it('without multiline', () => {
        const withoutLabelErrorMessage = 'No instances found with node type: \"undefined\"'
        const gotenTextField = renderer.create(
            <GotenTextField
                multiline={false}
            />
        )
        let textArea = undefined;
        let input = undefined;
        try {
            textArea = gotenTextField.root.findByType('textarea')
        } catch (error) {
            expect(error.message).toBe(withoutLabelErrorMessage)
        }
        try {
            input = gotenTextField.root.findByType('input')
        } catch (error) {
            expect(false).toBeTruthy()
            return
        }
        expect(textArea).toBeUndefined()
        expect(input).not.toBeUndefined()
    })
})