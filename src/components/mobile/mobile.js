import './mobile.css';
import React from 'react';
import ChatHead from './../chat-head/chatHead';
import ChatBody from './../chat-body/chatBody';

function mobile() {
    return (
        <section className="mobile">
            <div className="chat-box">
                <ChatHead/>
                <ChatBody/>
            </div>
        </section>
    )
}

export default mobile
