import * as React from 'react'
import { render } from 'react-dom'
import { App } from './App'

const appNode = document.getElementById('app')
// const { AppContainer } = require('react-hot-loader')
render(<App />, appNode)