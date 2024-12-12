import { Message } from '../types/Message';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-4 p-6 ${isUser ? 'bg-white' : 'bg-gray-50'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-500' : 'bg-green-500'}`}>
        {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
      </div>
      <div className="flex-1">
        <div className="font-medium mb-1">{isUser ? 'You' : 'AI Assistant'}</div>
        <div className="text-gray-700 whitespace-pre-wrap break-words leading-relaxed">{message.content}</div>
      </div>
    </div>
  );
}
