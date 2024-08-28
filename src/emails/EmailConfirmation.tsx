import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function EmailConfirmation() {
  return (
    <Html>
        <div className="flex items-center justify-center">
      <h1 className="flex items-center justify-center flex-col gap-10">Booking Confirmation</h1>
      <p>Thank you for your purchase</p>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Open QR Code
      </Button>
      </div>
    </Html>
  );
}
