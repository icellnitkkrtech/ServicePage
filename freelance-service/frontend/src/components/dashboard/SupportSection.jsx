import React, { useState } from "react";
import {
  BsSearch,
  BsQuestionCircle,
  BsChatDots,
  BsPaperclip,
  BsInbox,
} from "react-icons/bs";
import { supportTickets, faqs } from "./data/DummyData";

const SupportSection = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [priority, setPriority] = useState("medium");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    // Handle ticket submission
  };

  return (
    <div className="space-y-8">
      {/* Create Ticket Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Create Support Ticket</h2>
        <form onSubmit={handleSubmitTicket} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="general">General Query</option>
              <option value="technical">Technical Issue</option>
              <option value="billing">Billing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border rounded-lg p-2"
              rows="4"
              placeholder="Describe your issue..."
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
              >
                <BsPaperclip />
                <span>Attach File</span>
              </button>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>

      {/* Recent Tickets */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>
        <div className="space-y-4">
          {supportTickets.map((ticket) => (
            <div key={ticket.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{ticket.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {ticket.description}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    ticket.status === "Open"
                      ? "bg-green-100 text-green-800"
                      : ticket.status === "In Progress"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Created: {ticket.createdAt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg">
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() =>
                  setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                }
              >
                <span className="font-medium">{faq.question}</span>
                <BsQuestionCircle
                  className={`transform transition-transform ${
                    expandedFaq === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === faq.id && (
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
