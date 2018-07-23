import React from 'react'
import renderer from 'react-test-renderer'

import { GotenTextField } from '../src'

describe('GotenTextField label', () => {

    it('without label prop', () => {
        const withoutLabelErrorMessage = 'No instances found with node type: \"undefined\"'
        const gotenTextField = renderer.create(
            <GotenTextField/>
        )
        try {
            gotenTextField.root.findByType('label')
        } catch (error) {
            expect(error.message).toBe(withoutLabelErrorMessage)
            return
        }
        throw new Error('Label exists')
    })

    it('with label prop', () => {
        const label = 'Text'
        const labelResult = label + ' '
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
            />
        )
        let subComponent
        try {
            subComponent = gotenTextField.root.findByType('label')
        } catch (error) {
            throw new Error('Label not exists')
        }
        expect(subComponent.props.children).toBe(labelResult)
    })

    it('with componentLabel prop', () => {
        const gotenTextField = renderer.create(
            <GotenTextField
                componentLabel={
                    <text>
                        LABEL
                    </text>
                }
            />
        )
        let subComponent
        try {
            subComponent = gotenTextField.root.findByType('text')
        } catch (error) {
            throw new Error('label component not exists')
        }
        return
    })

    it('with componentLabel and label props', async () => {
        const withoutLabelErrorMessage = 'No instances found with node type: \"undefined\"'
        const label = 'Text'
        const gotenTextField = renderer.create(
            <GotenTextField
                label={label}
                componentLabel={
                    <text>
                        LABEL
                    </text>
                }
            />
        )
        let subComponent
        try {
            subComponent = gotenTextField.root.findByType('label')
        } catch (error) {
            expect(error.message).toBe(withoutLabelErrorMessage)
        }
        try {
            subComponent = gotenTextField.root.findByType('text')
        } catch (error) {
            throw new Error('label component not exists')
        }
        return
    })
})