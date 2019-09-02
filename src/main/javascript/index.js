import React from 'react'
import ReactDOM from 'react-dom'
import * as brandElements from '@kindred-brand/unibet'
import {Dummy} from '@payp/ui-components/dist/ui-components'
import {ProgressBar} from '@payp/ui-components/dist/ui-components'
import PayNPlay from './PayNPlaySocket'

const elements = Object.assign(brandElements, { Bonus: Dummy, ProgressBar, RegisterLink: Dummy })
const callback = () => console.log('Callback executed')

function start() {
    ReactDOM.render(
    <PayNPlay
    siteDefinition={{
        brand: 'unibet',
        locale: 'de_DE',
    }}
    contract={{
        translation: {
            title: 'Secure and fast registration',
            amountLabel: 'Select deposit amount',
            buttonLabel: 'Deposit and Play',
            termsAndConditions: 'By clicking continue you will be transferred to Trustly’s site and you agree to sharing your {personaldata} with {brand} for verification purposes in accordance with our {privacynotice}.',
            logoBetweenLabel: 'certified by',
            amountMinMax: 'Deposit amounts between {minimum} and {maximum} are valid!',
            errorGeneric: 'Something techy happend...',
            close: 'Close',
            personalData: 'Name, address, date of birth and gender.',
            personalDataTag: 'personal data',
            privacyNotice: 'privacy notice',
            progressBar1: 'Enter amount',
            progressBar2: 'Verify via your bank',
            progressBar3: 'Open account',
            setupAccountMsg: 'Setting up the account...',
            forwardToBankMsg: 'Contacting bank provider...'
        },
        privacyPolicyLink: {
            url: 'www.skatteverket.se'
        }
    }}
    elements={elements}
    callback={callback}
    />,
    document.getElementById('app')
)
}

window.onload = start