import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    ticketTypes: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

// define the event model with the schema
if(mongoose.models && mongoose.models.events) {
    delete mongoose.models.events;
}

const EventModel = mongoose.model("events", eventSchema);
export default EventModel;