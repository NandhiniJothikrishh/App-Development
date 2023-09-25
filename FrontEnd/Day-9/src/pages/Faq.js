import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const FAQ = () => {
    // Define an array of FAQ items (questions and answers)
    const faqItems = [
        {
            question: 'How do I subscribe to your pet box service?',
            answer: 'To subscribe to our pet box service, simply visit our website and choose a subscription plan that suits you. Follow the instructions to complete the subscription process.'
        },
        {
            question: "Can I customize the items in my pet subscription box?",
            answer: "Yes, we offer customization options for our pet boxes. You can specify your pet's preferences, dietary restrictions, and more during the subscription process."},
        {
            question: "What types of pets do you cater to?",
            answer: "We cater to a variety of pets, including dogs, cats, and small animals like rabbits and hamsters. Our goal is to provide something for every pet owner."
        },
        {
            question: "How does billing work for my subscription?",
            answer:"Billing for your pet subscription box occurs automatically on a monthly or quarterly basis, depending on your chosen subscription plan. You can manage your billing details in your account settings."
        },
        
        // Add more FAQ items as needed
    ];

    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div className='faq-main'>
        <div className="faq-container">
            <h2 className='faq-h2'>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default FAQ;