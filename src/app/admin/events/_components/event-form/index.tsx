"use client";
import Steps from "@/components/Steps";
import React, { useEffect } from "react";
import General from "./General";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";
// import { uploadImagesToFirebaseAndGetUrls } from "@/helpers/image-upload";

interface Props {
  initialData?: any;
  type?: "edit" | "create";
}

function EventForm({ initialData, type = "create" }: Props) {
  const [alreadyUploadedImages = [], setAlreadyUploadedImages] = React.useState<string[]
  >([]);
  const [activeStep = 0, setActiveStep] = React.useState<number>(0);
  const [newlySelectedImages = [], setNewlySelectedImages] = React.useState<
    any[]
  >([]);
  const [event, setEvent] = React.useState<any>(null);
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const commonProps = {
    event,
    setEvent,
    activeStep,
    setActiveStep,
    newlySelectedImages,
    setNewlySelectedImages,
    alreadyUploadedImages,
    setAlreadyUploadedImages
  };

  useEffect(() => {
    if (initialData) {
      setEvent(initialData);
      setAlreadyUploadedImages(initialData.images);
    }
  }, [initialData]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Steps
          stepNames={["General", "Location & Date", "Media", "Tickets"]}
          stepsContent={[
            <General {...commonProps} />,
            <LocationAndDate {...commonProps} />,
            <Media {...commonProps} />,
            <Tickets {...commonProps} />,
          ]}
          activeStep={activeStep}
        />
      </form>
    </div>
  );
}

export default EventForm;
