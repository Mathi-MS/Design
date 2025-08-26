import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const chatResponses = {
  "web development":
    "Our web development services include custom websites, web applications, and e-commerce solutions. Would you like to schedule a consultation?",
  pricing:
    "We offer flexible pricing plans starting from $999. Our Business plan at $2,999 is most popular. Would you like detailed pricing information?",
  portfolio:
    "You can view our latest projects in the portfolio section above. We've worked with 200+ clients across various industries.",
  default:
    "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or contact us directly at contact@DesignDynasty.com",
};

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi! How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickOptions = [
    { label: "Web Development", message: "I need web development services" },
    { label: "Pricing", message: "I want to see pricing" },
    { label: "Portfolio", message: "I want to view your portfolio" },
  ];

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      content,
      isUser,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleChatResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    let response = chatResponses.default;

    for (const [key, value] of Object.entries(chatResponses)) {
      if (key !== "default" && lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => addMessage(response, false), 500);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, true);
      handleChatResponse(inputValue);
      setInputValue("");
    }
  };

  const handleQuickOption = (message: string) => {
    addMessage(message, true);
    handleChatResponse(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      data-testid="chatbot-container"
    >
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange hover:bg-orange/90 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
        data-testid="button-chat-toggle"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          className="chatbot-widget open bg-white rounded-xl shadow-2xl w-80 h-96 absolute bottom-20 right-0 border border-gray-200"
          data-testid="chatbot-widget"
        >
          <div className="bg-orange text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold" data-testid="text-chatbot-title">
                  DesignDynasty Support
                </div>
                <div
                  className="text-xs text-orange-200"
                  data-testid="text-chatbot-status"
                >
                  Online now
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange-200"
              data-testid="button-chat-close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto" data-testid="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg mb-3 ${
                  message.isUser
                    ? "bg-orange text-white ml-8"
                    : "bg-gray-100 text-dark-gray mr-8"
                }`}
                data-testid={`message-${index}`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {quickOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickOption(option.message)}
                    className="bg-orange/10 text-orange px-3 py-2 rounded-lg text-sm hover:bg-orange hover:text-white transition-colors"
                    data-testid={`button-quick-option-${index}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange text-sm"
                data-testid="input-chat-message"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange hover:bg-orange/90 text-white px-4 py-2 rounded-r-lg transition-colors"
                data-testid="button-chat-send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
