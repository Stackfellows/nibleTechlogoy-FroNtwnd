import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "How quickly can you start working on my project?",
          answer: `We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster start times depending on our current capacity and your specific requirements.\n\nOur process includes:\n• Initial consultation and requirement gathering\n• Project planning and timeline creation\n• Team assignment and resource allocation\n• Kickoff meeting and project initiation`,
        },
        {
          question: "What is your typical project timeline?",
          answer: `Project timelines vary based on complexity and scope:\n\n• Simple websites: 4-8 weeks\n• Complex web applications: 3-6 months\n• Mobile apps: 4-8 months\n• Enterprise solutions: 6-12 months\n\nWe provide detailed timelines during the consultation phase and maintain transparent communication throughout the project lifecycle.`,
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer: `Yes, we offer comprehensive post-launch support including:\n\n• 30-day warranty period for bug fixes\n• Ongoing maintenance packages\n• Technical support and updates\n• Performance monitoring\n• Security updates and patches\n• Feature enhancements and scaling\n\nOur support packages are customizable based on your specific needs and budget.`,
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How do you structure your pricing?",
          answer: `Our pricing is transparent and project-based:\n\n• Fixed-price projects: Agreed upon scope and deliverables\n• Time & materials: Hourly rates for ongoing work\n• Retainer agreements: Monthly packages for continuous support\n\nWe provide detailed quotes with clear breakdowns of costs, timelines, and deliverables. No hidden fees or surprise charges.`,
        },
        {
          question: "What payment methods do you accept?",
          answer: `We accept various payment methods for your convenience:\n\n• Bank transfers (ACH/Wire)\n• Credit cards (Visa, MasterCard, American Express)\n• PayPal for smaller projects\n• Cryptocurrency (Bitcoin, Ethereum) upon request\n\nPayment terms are typically structured as milestones with 30% upfront, progress payments, and final payment upon completion.`,
        },
        {
          question: "Do you offer payment plans for large projects?",
          answer: `Yes, we understand that large projects require significant investment. We offer flexible payment structures:\n\n• Milestone-based payments tied to deliverables\n• Monthly payment plans for extended projects\n• Customized payment schedules based on your cash flow\n• Early payment discounts available\n\nWe work with you to create a payment plan that fits your budget and project timeline.`,
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What technologies do you specialize in?",
          answer: `We work with cutting-edge technologies across the full stack:\n\n**Frontend:** React, Vue.js, Angular, Next.js, TypeScript\n**Backend:** Node.js, Python, PHP, .NET, Java\n**Mobile:** React Native, Flutter, iOS (Swift), Android (Kotlin)\n**Cloud:** AWS, Google Cloud, Azure, Docker, Kubernetes\n**Databases:** PostgreSQL, MongoDB, MySQL, Redis\n\nWe stay current with the latest technologies and choose the best stack for each project's requirements.`,
        },
        {
          question: "How do you ensure code quality and security?",
          answer: `Quality and security are paramount in our development process:\n\n**Code Quality:**\n• Peer code reviews for all commits\n• Automated testing (unit, integration, e2e)\n• Continuous integration/deployment\n• Code documentation and standards\n\n**Security:**\n• Security audits and penetration testing\n• OWASP compliance\n• Data encryption and secure authentication\n• Regular security updates and monitoring`,
        },
        {
          question: "Can you work with our existing technical team?",
          answer: `Absolutely! We excel at collaborative development:\n\n• Integration with existing development workflows\n• Knowledge transfer and documentation\n• Code reviews and technical mentoring\n• Agile/Scrum methodology adoption\n• Communication through your preferred tools (Slack, Teams, etc.)\n\nWe can augment your team or work alongside your developers to achieve your goals efficiently.`,
        },
      ],
    },
    {
      category: "Process & Communication",
      questions: [
        {
          question: "How do you handle project communication?",
          answer: `We maintain transparent communication throughout your project:\n\n• Weekly progress reports and demos\n• Dedicated project manager as your main contact\n• Real-time updates via project management tools\n• Regular video calls and status meetings\n• 24/7 access to project dashboard\n• Immediate notification of any issues or changes\n\nYou'll always know exactly where your project stands.`,
        },
        {
          question: "What if I need changes during development?",
          answer: `We understand that requirements can evolve. Our change management process includes:\n\n• Clear change request procedures\n• Impact assessment for timeline and budget\n• Transparent communication about implications\n• Flexible scope adjustments when possible\n• Documentation of all approved changes\n\nWe aim to accommodate reasonable changes while maintaining project integrity and timelines.`,
        },
        {
          question: "How do you handle different time zones?",
          answer: `With offices in multiple time zones, we provide excellent coverage:\n\n• Overlapping work hours for real-time collaboration\n• Asynchronous communication for 24/7 progress\n• Flexible meeting schedules to accommodate your timezone\n• Follow-the-sun development model for faster delivery\n• Clear handoff procedures between teams\n\nWe ensure smooth communication regardless of geographical differences.`,
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? -1 : faqIndex);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and
            how we can help bring your project to life.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs?.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-brand border border-border overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
                  <Icon
                    name="HelpCircle"
                    size={20}
                    color="var(--color-primary)"
                  />
                  <span>{category?.category}</span>
                </h3>
              </div>

              {/* Questions */}
              <div className="divide-y divide-border">
                {category?.questions?.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openFAQ === faqIndex;

                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-brand focus:outline-none focus:bg-muted/50"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-text-primary pr-4">
                            {faq?.question}
                          </span>
                          <Icon
                            name={isOpen ? "ChevronUp" : "ChevronDown"}
                            size={20}
                            color="var(--color-text-secondary)"
                            className="flex-shrink-0 transition-transform duration-200"
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="text-text-secondary whitespace-pre-line leading-relaxed">
                            {faq?.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-brand p-8 border border-primary/10">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Can't find the answer you're looking for? Our team is here to help
              with any specific questions about your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-brand hover:bg-primary/90 transition-brand">
                <Icon name="MessageCircle" size={18} color="white" />
                <span>Chat with Us</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-brand hover:border-primary/50 hover:text-primary transition-brand">
                <Icon name="Phone" size={18} color="currentColor" />
                <span>Schedule a Call</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-brand hover:border-primary/50 hover:text-primary transition-brand">
                <Icon name="Mail" size={18} color="currentColor" />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
