import { useState } from 'react';

const FAQAccordion = () => {
  // Store the state of each accordion item (open or closed)
  const [openItem, setOpenItem] = useState(null);

  // Toggle the visibility of the clicked accordion item
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "How does HealthSquare's AI Search work?",
      answer:
        "HealthSquare's AI Search utilizes advanced algorithms to understand user queries and deliver highly accurate results. It learns from user interactions, ensuring a continuously improving and intuitive search experience.",
    },
    {
      question: "How secure are HealthSquare's servers?",
      answer:
        "Security is our priority. HealthSquare employs robust measures to ensure the safety of your data. Our secure servers are designed to protect your information from potential threats, providing peace of mind.",
    },
    {
      question: "Can I customize the dashboard to fit my business needs?",
      answer:
        "Absolutely! HealthSquare offers a fully customizable dashboard, allowing you to arrange widgets and modules based on your preferences. Tailor your workspace to suit the unique requirements of your business.",
    },
    {
      question: "How does 'Best of the Best' feature benefit my business?",
      answer:
        "'Best of the Best' feature is a curated selection of the most efficient tools and functionalities within HealthSquare. It ensures optimal performance, streamlining your workflow for a superior user experience.",
    },
    {
      question: "Can I integrate HealthSquare with other applications?",
      answer:
        "Yes, you can! HealthSquare supports seamless integration with various third-party applications and services. Expand the capabilities of your business by connecting HealthSquare with your preferred tools.",
    },
    {
      question: "What support options are available if I encounter issues?",
      answer:
        "We've got you covered! Contact our support team directly through the Notify app for instant assistance. Our dedicated support staff is ready to address your queries and ensure a smooth experience with our platform.",
    },
    {
      question: "Still have questions?",
      answer:
        "Can’t find the answer you’re looking for? Please chat with our friendly team.",
      linkText: "Contact Us",
      link: "/contact/contact-v1",
    },
  ];

  return (
    <div className="fifth-section px-4 py-8 max-w-4xl mx-auto">
      <div className="section-title mb-6">
        <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
        <p className="text-gray-600">Everything you need to know</p>
      </div>
      <div className="questions-holder space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="question-container border-b">
            <div
              className="question flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleItem(index)}
            >
              <div className="question-text text-lg font-medium">
                {faq.question}
              </div>
              <img
                src={openItem === index ? 'plus.svg' : 'plus.svg'}
                alt={openItem === index ? 'minus sign' : 'plus sign'}
                className="w-4 h-4"
              />
            </div>
            {openItem === index && (
              <div className="answer-holder pl-4 pb-4">
                <div className="answer-text text-gray-700">
                  {faq.answer}
                  {faq.link && (
                    <div className="mt-2">
                      <a href={faq.link} className="text-green-500 underline">
                        {faq.linkText}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
