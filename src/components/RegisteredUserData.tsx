// Tremor Import
import { Card, Flex, Title } from "@tremor/react";

// Font Import
import { parisienne } from "@/ui/fonts";

export default function RegisteredUserData({ adminData }: { adminData: any }) {
  return (
    <div className="mx-auto w-[96%] flex flex-col px-3 py-5 border-4 border-teal-300 rounded-2xl">
      <h1
        className={`${parisienne.className} antialiased text-2xl md:text-6xl text-purple-700`}
      >
        Registered Users
      </h1>
      <div className="flex flex-col pt-10 gap-5">
        <Card className="max-w-6xl mx-auto">
          <Flex>
            <Title>Name</Title>
            <Title>Role</Title>
          </Flex>
        </Card>
        {adminData?.userCredentials?.map((data: any, value: number) => (
          <Card className="max-w-6xl mx-auto" key={value}>
            <Flex>
              <Title>{data.name}</Title>
              <Title>
                {data.type[0].toUpperCase()}
                {data.type.slice(1)}
              </Title>
            </Flex>
          </Card>
        ))}
      </div>
    </div>
  );
}
