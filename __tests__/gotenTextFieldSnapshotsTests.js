import React from 'react'
import renderer from 'react-test-renderer'

import { GotenTextField } from '../src'


describe('GotenTextField snapshots', () => {

    it('type text', () => {
        const type = 'text'
        const label = 'Text'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            /> 
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('type email', () => {
        const type = 'email'
        const label = 'Email'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('type number', () => {
        const type = 'number'
        const label = 'Number'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('type time', () => {
        const type = 'time'
        const label = 'Time'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('type url', () => {
        const type = 'url'
        const label = 'Url'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('type password', () => {
        const type = 'password'
        const label = 'Password'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('type invalid', () => {
        const type = 'invalid'
        const label = 'Invalid'
        const tree = renderer.create(
            <GotenTextField
                label={label}
                type={type}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})