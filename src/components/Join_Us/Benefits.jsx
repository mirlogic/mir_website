import React from 'react';

import BenefitsList from './BenefitsList';


const Benefits = () => {
    return ( 
        <div>
            <h1 className="display-4 text-primary aboutUs-sections" id="benefits">BENEFITS</h1>

            <br />
            <br />

            <p>
                You deserve to be rewarded for your hard work. When you apply for a job with <strong>MirLogic Solutions Corporation</strong>, you are entitled to a broad array of 
                employment benefits in Washington, DC. We encourage you to review our <span><strong><a href="/">current job openings</a></strong></span> to see if a position matches 
                your interests. MirLogic offers competitive benefits to our employees:
            </p>

            <br />

            <BenefitsList />

            <br />
            <br />
        </div>
    );
}
 
export default Benefits;