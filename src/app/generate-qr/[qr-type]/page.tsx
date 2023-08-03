"use client";
import React from "react";
import { TextInput, Box, NumberInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import IconButton from "@/app/components/IconButton";

export default function Page() {
  const form = useForm({
    initialValues: { email: "", subject: "", message: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => "Email is required",
      subject: (value: string) => "Subject is required",
      message: (value: string) => "Message is required",
    },
  });

  // console.log(form.values.email);

  return (
    <Container
      size={1400}
      className="flex gap-5">
      <div className=" w-6/12">
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            label="Email address"
            placeholder="Email address"
            {...form.getInputProps("email")}
          />
          <TextInput
            mt="sm"
            label="Subject"
            placeholder="Subject"
            {...form.getInputProps("subject")}
          />

          <Textarea
            mt="sm"
            placeholder="Message"
            label="Message"
            withAsterisk
            {...form.getInputProps("message")}
          />

          <div className="flex justify-end">
            <Button
              className=" bg-primary-500 "
              variant="filled"
              type="submit"
              mt="sm">
              Generate
            </Button>
          </div>
        </form>
      </div>

      <div className=" w-6/12 flex flex-col gap-5 justify-center  items-center">
        <QRCodeSVG
          value={form.values.email}
          size={119}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "https://static.zpao.com/favicon.png",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
        <div className="flex gap-3">
          <IconButton title="Download Image" />
          <IconButton
            title="Download SVG"
            width={"w-52"}
          />
        </div>
      </div>
    </Container>
  );
}
