// Font Import
import { parisienne } from "@/ui/fonts";

// Tremor Import
import { Card, Flex, Metric, Subtitle, Text, Title } from "@tremor/react";

export default function BookingHistory({ adminData }: { adminData: any }) {
  return (
    <div className="mx-auto w-[96%] flex flex-col px-3 py-5 border-4 border-teal-300 rounded-2xl mb-5">
      <h1
        className={`${parisienne.className} antialiased text-2xl md:text-6xl text-purple-700`}
      >
        User Bookings History
      </h1>
      <div className="flex flex-col pt-10 gap-5">
        <Card className="max-w-6xl mx-auto">
          <Flex>
            <Subtitle>Room Type</Subtitle>
            <Subtitle>From Date</Subtitle>
            <Subtitle>To Date</Subtitle>
            <Subtitle color="emerald">Total Price</Subtitle>
          </Flex>
        </Card>
        {adminData?.userHistory?.map((data: any, value: number) => (
          <Card className="max-w-6xl mx-auto" key={value}>
            <Flex>
              <Title>
                {data.roomType[0].toUpperCase()}
                {data.roomType.slice(1)}
              </Title>
              <Title>
                {new Date(data.dateRange.from).getDate()}/
                {new Date(data.dateRange.from).getMonth() + 1}/
                {new Date(data.dateRange.from)
                  .getFullYear()
                  .toString()
                  .slice(-2)}
              </Title>
              <Title>
                {new Date(data.dateRange.to).getDate()}/
                {new Date(data.dateRange.to).getMonth() + 1}/
                {new Date(data.dateRange.from)
                  .getFullYear()
                  .toString()
                  .slice(-2)}
              </Title>
              <Title color="emerald">&#8377; {data.totalPrice}</Title>
            </Flex>
          </Card>
        ))}
      </div>
    </div>
  );
}
