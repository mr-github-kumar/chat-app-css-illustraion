import './chatHead.css';
import React from 'react'

function chatHead() {
    return (
        <section className="chat-head">
            <div className="chat-head-top"></div> 
            <div className="chat-head-left">
                <i class="fas fa-chevron-left"></i>
                <div className="head-left-pic"></div>
                <div className="head-left-heading">
                    <span className="left-heading-name">Samuel Green</span>
                    <span className="left-heading-status">Available to walk</span>
                </div>
            </div>       
            <div className="chat-head-right">
                <i class="fas fa-ellipsis-v"></i>
            </div>
        </section>
    )
}

export default chatHead
