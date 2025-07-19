import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  title: string;
}

export const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <Card className="border border-border hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </CardContent>
    </Card>
  );
};