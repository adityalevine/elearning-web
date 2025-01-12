import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProgramCard = (props) => {
  const { image, title } = props;

  return (
    <Card className="w-[300px] text-center border-none shadow-none">
      <CardHeader>
        <img src={image} alt={title} />
        <CardTitle className="pt-10">{title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
