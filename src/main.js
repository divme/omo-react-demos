/**
 * Created by mszq on 2018/12/21.
 */
import React, { Component } from "react"
import { render } from "react-dom"
import Card from "../components/es6-card01.js"
var __tdxRender = (configs, dom) => {
    render(
        <Card configs={configs} />,
        dom
    )
}

export default __tdxRender