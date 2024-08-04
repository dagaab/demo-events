// import { Button } from "@nextui-org/button";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { connectDB } from "@/config/dbConfig";
import { getMongoDBUserIDOfLoggedInUser, handleNewUserRegistration } from "@/actions/users";
connectDB;

export default async function Home() {
  await handleNewUserRegistration();
  
  await getMongoDBUserIDOfLoggedInUser();

  // const mongoUserId = await getMongoDBUserIDOfLoggedInUser();
  // console.log("mongoUserId", mongoUserId);
  return (
    <div className="p-10 flex items-center justify-center">
      <Card
        isFooterBlurred
        className="w-[500px] h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p> */}
          <h4 className="text-white/60 font-medium text-2xl">Event Day</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://timelapselab.it/wp-content/uploads/2023/09/northstar5-768x427.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">3 September 2024</p>
            <p className="text-black text-tiny">12:00</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Buy Tickets
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
