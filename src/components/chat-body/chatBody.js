import './chatBody.css';
import React from 'react'

function chatBody() {
    return (
        <section className="chat-body">
            <div className="message message-1">
                That sounds great.I'd be happy to discuss more.
            </div>
            <div className="message message-2">
                Could you send over some pictures of your dog, please?            
            </div>
            <div className="message message-3">
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>                
            </div>
            <div className="message message-4"> Here are a few pictures. She’s a happy girl!</div>
            <div className="message message-5">Can you make it?</div>
            <div className="message message-6">She looks so happy! The time we discussed works. How long shall I take her out for?</div>
            <div className="message message-7">
                <div className="message-7-text">
                    <span className="message-7-spin"></span>
                    <span>30 minute walk</span>
                </div>
                <span>$29</span>
            </div>
            <div className="message message-7">
                <div className="message-7-text">
                    <span className="message-7-spin"></span>
                    <span>1 hour walk</span>
                </div>
                <span>$49</span>
            </div>
                        
            <div className="type-area">
                <input  type="text" placeholder="Type a message..."/>
                <i class="fas fa-chevron-circle-right"></i>
            </div>
            
            
        </section>
    )
}

export default chatBody
