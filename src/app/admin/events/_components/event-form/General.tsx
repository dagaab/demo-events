import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

export interface EventFormStepProps {
  event: any;
  setEvent: React.Dispatch<React.SetStateAction<any>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  newlySelectedImages: any[];
  setNewlySelectedImages: React.Dispatch<React.SetStateAction<any[]>>;
  alreadyUploadedImages: string[];
  setAlreadyUploadedImages: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
}

function General({
  event,
  activeStep,
  setActiveStep,
  setEvent,
}: EventFormStepProps) {
  const getCommonProps = (name: string) => {
    return {
      labelPlacement: "outside",
      value: event?.[name],
      onChange: (e: any) => setEvent({ ...event, [name]: e.target.value }),
      isRequired: true,
    } as any;
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Event Name"
        placeholder="Enter event name"
        {...getCommonProps("name")}
      />

      <Textarea
        label="Description"
        placeholder="Enter description"
        {...getCommonProps("description")}
      />

      <div className="flex justify-center gap-5">
        <Button onClick={() => {}}>Cancel</Button>
        <Button
          onClick={() => setActiveStep(activeStep + 1)}
          color="primary"
          isDisabled={!event?.name || !event?.description}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default General;
