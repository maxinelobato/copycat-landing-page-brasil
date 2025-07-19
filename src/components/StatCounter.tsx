interface StatCounterProps {
  label: string;
  value: string;
}

export const StatCounter = ({ label, value }: StatCounterProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-orange-accent mb-2">{value}</div>
      <div className="text-hero-foreground text-lg">{label}</div>
    </div>
  );
};