import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MentorCard = (props) => {
  const { image, name, role } = props;

  return (
    <Card className="w-[90%] md:w-[300px] lg:w-[400px] shadow-none">
      <CardHeader>
        <img src={image} alt={name} className="rounded-t-lg" />
        <CardTitle className="flex items-center justify-center">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center text-xl text-gray-500">
        <p>{role}</p>
      </CardContent>
    </Card>
  );
};
