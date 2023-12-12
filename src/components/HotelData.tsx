// Tremor Import
import { Card, Flex, ProgressBar, Subtitle, Text, Title } from "@tremor/react";

// Font Import
import { parisienne } from "@/ui/fonts";

export default function HotelData({ adminData }: { adminData: any }) {
  return (
    <div className="mx-auto w-[96%] flex flex-col px-3 py-5 border-4 border-fuchsia-400 rounded-2xl">
      <h1
        className={`${parisienne.className} antialiased text-2xl md:text-6xl text-purple-700`}
      >
        Hotel Data
      </h1>
      <div className="flex flex-col pt-10 gap-5">
        <div className="flex justify-around">
          <Card className="max-w-md mx-auto">
            <Flex>
              <div>
                <Subtitle>Rooms Booked</Subtitle>
                <Title>
                  {12 -
                    (adminData?.roomsAvailable?.deluxe +
                      adminData?.roomsAvailable?.premier)}
                </Title>
              </div>
              <div>
                <Subtitle>Total Revenue</Subtitle>
                <Title>&#8377; {adminData?.totalRevenue}</Title>
              </div>
            </Flex>
          </Card>
          <Card className="max-w-md mx-auto">
            <Flex>
              <div>
                <Subtitle>Available Deluxe Rooms</Subtitle>
                <Title>{adminData?.roomsAvailable?.deluxe}</Title>
              </div>
              <div>
                <Subtitle>Available Premier Rooms</Subtitle>
                <Title>{adminData?.roomsAvailable?.premier}</Title>
              </div>
            </Flex>
          </Card>
        </div>
        <div className="flex justify-center">
          <Card className="max-w-sm mx-auto">
            <Title>Total Revenue Goal</Title>
            <Flex>
              <Text>
                &#8377; {adminData?.totalRevenue} &bull;{" "}
                {(adminData?.totalRevenue / 1000000) * 100}%
              </Text>
              <Text>&#8377; 10,00,000</Text>
            </Flex>
            <ProgressBar
              value={Math.floor((adminData?.totalRevenue / 1000000) * 100)}
              color="teal"
              className="mt-3"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
