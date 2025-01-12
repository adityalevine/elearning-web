import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FeatureCard = (props) => {
  const { icon, title, width } = props;

  return (
    <Card className="w-[90%] md:w-[300px] lg:w-[400px] shadow-lg bg-gray-100">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <img src={icon} alt={title} width={width} className="mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
          commodi repellat consectetur vitae. Sequi!
        </p>
      </CardContent>
    </Card>
  );
};
