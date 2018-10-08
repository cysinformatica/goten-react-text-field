# Goten Text Field

**GotenTextField** is a **React component** that facilitates the use of text inputs.
- It allows to **bind** an object to the value of a text input.
- It helps validating a text input using its **type**.
    - You can specify a **pattern (Regex)** for the validation.
    - You can modify the error's display message and add certain functionality like pop-ups.

## Index

- [**Install**](#install)
- [**Usage**](#usage)
- [**Example of use**](#example-of-use)
- [**Props**](#props)
- [**Methods**](#methods)
- [**Contributions**](#contributions)

## Install

```npm install goten-react-text-field```

## Usage

``` jsx
var GotenTextField = require('goten-react-text-field').GotenTextField; // ES5
 
import { GotenTextField } from 'goten-react-text-field'; // ES6

refsGotenTextFieldWithPattern = React.createRef()
gotenTextFields = {}

<GotenTextField
    label={'Date Pattern'}
    placeholder={'Insert a date: dd/mm/yyyy'}
    type={'text'}
    pattern={'[0-9]{2}\/[0-9]{2}\/[0-9]{4}'}
    errorMessage={'Please insert a text using the correct pattern'}
    errorRequiredMessage={'This field is required'}
    required={true}
    showError={true}
    bindContainer={this.gotenTextFields}
    bindProp={'pattern'}
    ref={this.refsGotenTextFieldWithPattern}
/>

validate() {
    return refsGotenTextFieldWithPattern.current.validate()
}
```

## Example of use

``` jsx
import React, { Component } from 'react'
import { GotenTextField } from 'goten-react-text-field'

const state = {
    changeOnPress: true
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = state
        this.refsGotenTextFieldWithPattern = React.createRef()
        this.gotenTextFields = {}
    }

    render() {
        return (
            <div>
                <div className='title'>GotenTextField</div>
                <GotenTextField
                    placeholder={'[0-9]{2}\/[0-9]{2}\/[0-9]{4}'}
                    // label={'Date Pattern'}
                    componentLabel={
                        <label>
                            Date Pattern
                        </label>
                    }
                    type={'text'} // email; number; password; date; time; url
                    pattern={'[0-9]{2}\/[0-9]{2}\/[0-9]{4}'}
                    errorMessage={'Please insert a text using the correct pattern'}
                    errorRequiredMessage={'This field is required'}
                    required={true}
                    showError={true}
                    bindContainer={this.gotenTextFields}
                    bindProp={'pattern'}
                    ref={this.refsGotenTextFieldWithPattern}
                />  
                <br/>
                <br/>
                <input
                    type='submit'
                    value='Validate And Show Input'
                    onClick={() => {
                        this.setState({changeOnPress: !this.state.changeOnPress})
                        this.refsGotenTextFieldWithPattern.current.validate()
                    }}
                />
            </div>
        )
    }
}
```

## Props

| Prop Name            | Type          | Default          | Description  |
| ---------------------|:------------- | :--------------- | -------------|
| bindContainer        | Object        |                  | Container of the attributes that will be binded to the value of the text fields. |
| bindProp             | String        |                  | Attribute`s name of the bindContainer object. |
| componentLabel       | Component     |                  | Label component, same as 'label' but with a component. |
| errorMessage         | String, Component | String Message   | Error message corresponding to the pattern or type. |
| errorRequiredMessage | String, Component | String Message   | Error message corresponding to the 'required' prop. |
| label                | String        |                  | Label of the text field. |
| pattern              | String        |                  | Pattern to validate the value of the text field with. |
| placeholder          | String        |                  | Placeholder. |
| required  | Boolean       | False            | Whether the text field is required (true) or not.|
| showError            | Boolean       | False            | Whether to show error messages (true) or not. |
| type                 | String        | text             | The text field's type. |

- All other props are inherited from the react component **input**

## Methods

- **validate()**

Validate the **GotenTextField** using the props **types**, **pattern** and **required**.

- **clearError()**

Clears the text field's error (if any).

- **clear()**

Clears any text and errors the text field has.

## Contributions

To contribute to this package, we use the following workflow:
1. Add an issue with related tags to describe the contribution (is it a bug? a feature request?).
2. Branch your solution from develop, naming it like ```#<issue_number>-<descriptive_name>```.
3. Send a pull request and wait for approval/corrections.
