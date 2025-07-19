import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsappButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
}

export const WhatsappButton = ({ children, className = "", variant = "default" }: WhatsappButtonProps) => {
  const phoneNumber = "5512997067961";
  const message = "Oi, vi seu anúncio na internet e preciso de um Advogado Especialista em Contratos Brasil";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "hero") {
    return (
      <button
        onClick={handleClick}
        className={`bg-cta-green hover:bg-cta-green-hover text-cta-green-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-cta-green hover:bg-cta-green-hover text-cta-green-foreground ${className}`}
    >
      {children}
    </Button>
  );
};