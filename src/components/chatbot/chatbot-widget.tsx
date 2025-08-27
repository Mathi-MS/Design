import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const chatResponses = {
  hi: "Hello! How can I help you?",
  hello: "Hello! How can I help you?",
  "web development":
    "🚀 We craft scalable websites & web apps tailored for your business. Do you want a free consultation?",
  pricing:
    "💰 Our plans start at $999. Business plan at $2,999 is most popular. Would you like detailed pricing?",
  portfolio:
    "📂 You can explore our portfolio — 200+ projects across industries! Would you like the link?",
  default:
    "🤝 Thanks for reaching out! Our team will reply soon. Meanwhile, you can contact us directly at designdynasty84@gmail.com",
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
      content: "👋 Hi! How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const quickOptions = [
    { label: "💻 Web Development", message: "Tell me about web development" },
    { label: "💲 Pricing", message: "What’s your pricing?" },
    { label: "📂 Portfolio", message: "Show me your portfolio" },
  ];

  // ✅ Adds message
  const addMessage = (content: string, isUser: boolean) => {
    setMessages((prev) => [
      ...prev,
      { content, isUser, timestamp: new Date() },
    ]);
  };

  // ✅ Handles bot response
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

  // ✅ Sends user message
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, true);
      handleChatResponse(inputValue);
      setInputValue("");
    }
  };

  // ✅ Auto-scroll whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full sm:w-auto">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange shadow-lg hover:bg-orange/90 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all transform hover:scale-110 fixed bottom-6 right-6"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            animate-fadeInUp 
            fixed sm:absolute bottom-0 sm:bottom-20 right-0 
            w-full sm:w-80 h-full sm:h-[400px] 
            bg-white/95 backdrop-blur-xl 
            rounded-none sm:rounded-2xl 
            shadow-2xl flex flex-col
          "
        >
          {/* Header */}
          <div className="bg-orange p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold">
                  DesignDynasty Support
                </h4>
                <p className="text-xs text-orange-200">
                  💡 Online & ready to help
                </p>
              </div>
            </div>
            <X
              className="text-white cursor-pointer hover:text-orange-200"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                  msg.isUser
                    ? "ml-auto bg-orange text-white rounded-br-none"
                    : "mr-auto bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.content}
                <div className="text-[10px] opacity-60 mt-1">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
            {/* ✅ Invisible marker for auto-scroll */}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-orange hover:bg-orange/90 text-white p-2 rounded-full flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
