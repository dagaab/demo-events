import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

import { connectDB } from "@/config/dbConfig";
import {
  getMongoDBUserIDOfLoggedInUser,
  handleNewUserRegistration,
} from "@/actions/users";
import { EventType } from "@/interfaces/events";
import EventModel from "@/models/event-model";
import Link from "next/link";
connectDB();

export default async function Home() {
  await handleNewUserRegistration();

  await getMongoDBUserIDOfLoggedInUser();

  const events: EventType[] = (await EventModel.find({}).sort({
    createdAt: -1,
  })) as any;
  // console.log("mongoUserId", mongoUserId);
  return (
    <div>
      {/* introduction */}
    {/* <div className="flex justify-center">
      <p className="">Check our events</p>
      </div>  */}

      <div className="flex items-center justify-center flex-col gap-10">
        {events.map((event) => (
          <div key={event._id}>
          
          <Card isFooterBlurred className="md:w-[600px] md:h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white font-medium text-2xl bg-black/80 p-2">{event.name}</h4>
        {/* <p className="text-tiny text-white/60 uppercase font-bold">{event.description}</p> */}
      </CardHeader>
      <img
                src={event.images[0]}
                alt="Picture of the event"
                height={150}
                width={250}
                className="w-full object-contain"
              />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
        <h1><i className="ri-map-pin-line">{event.location}</i></h1>
                  <h1><i className="ri-calendar-2-line">{event.date} at{" "}{event.time}</i></h1>
        </div>
        <Link
                  className="bg-primary text-white px-3 py-2 rounded-full text-sm"
                  href={`/book-event/${event._id}`}
                >
                  View Event
                </Link>
      </CardFooter>
    </Card>
                
             
          </div>
        ))}
      </div>
    </div>
  );
}
