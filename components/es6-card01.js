import React, { Component } from "react";
// import styles from "es6-card01.css";

export default class  Card01 extends React.Component{
    render() {

        var title = <p> 我是title</p>
        var content = <p> 我是content</p>
        return <div className="alert">

            {title}

            {content}

            <div>

                {title}


            </div>

        </div>
    }
}