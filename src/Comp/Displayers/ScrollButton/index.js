import React from 'react';

import "./style.css"
class ScrollBtn extends React.Component {
    componentWillUnmount() {
        window.onscroll = (() => "")
    }

    displayScrollBtnHandler = () => {
        if (document.documentElement.scrollTop > 20) {
            document.getElementById("scrollBtn-container").className = "scrollBtn-container-active"
        } else document.getElementById("scrollBtn-container").className = "scrollBtn-container-disabled"

    }

    scrollTopPageHandler = () => {
        return document.documentElement.scrollTop = 0
    }

    render() {
        window.onscroll = (() => { this.displayScrollBtnHandler() })

        return <div id="scrollBtn-container">
            <button title="scroll top page" onClick={this.scrollTopPageHandler} >
                <i class="fi-cnsuxl-chevron-solid"></i>
            </button>

        </div>
    }

}

export default ScrollBtn


