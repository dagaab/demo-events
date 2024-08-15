import PageTitle from "@/components/PageTitle";
import { connectDB } from "@/config/dbConfig";
import { EventType } from "@/interfaces/events";
import EventModel from "@/models/event-model";
import { Link } from "@nextui-org/react";
import React from "react";
import EventsTable from "./_components/events-table";
connectDB();


async function EventsPage() {
  const events : EventType[] = (await EventModel.find()) as any;
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Events" />
        <Link
          href="/admin/events/new-event"
          className="bg-primary text-white px-3 py-2 rounded-sm text-sm"
        >
          Create Event
        </Link>
      </div>

      <EventsTable events={JSON.parse(JSON.stringify(events))} />
    </div>
  );
}

export default EventsPage;
