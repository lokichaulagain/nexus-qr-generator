"use client";
import React, { useEffect, useState } from "react";
import { TextInput, Container, Button, Textarea, Title, Accordion, createStyles, rem, Select, Slider, FileInput, Checkbox } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";
import IconButton from "@/app/components/IconButton";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IconUpload } from "@tabler/icons-react";

type Inputs = {
  email: string;
  subject: string;
  message: string;
  color: any;
  excavate: boolean;
  isImageCenter: boolean;
  size: number;
  level: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const allInputField = watch();

  useEffect(() => {
    console.log(allInputField);
  }, [allInputField]);

  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState("#000000");
  const handleBackgroundColorChange = (e: any) => {
    // setSelectedColor(color);
    const hexColor = e.target.value;
    setSelectedBackgroundColor(hexColor);
  };

  const [selectedForeGroundColor, setSetselectedForeGroundColor] = useState("#000000");
  const handleForeGroundColorChange = (e: any) => {
    const hexColor = e.target.value;
    setSetselectedForeGroundColor(hexColor);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState("");
  const generateQR: SubmitHandler<Inputs> = () => {
    setIsLoading(true);
    console.log(allInputField);
    const combinedData = `mailto:${allInputField.email}?subject=${encodeURIComponent(allInputField.subject)}&body=${encodeURIComponent(allInputField.message)}`;
    setdata(combinedData);
    setIsLoading(false);
  };

  const handleSliderChange = (value: number) => {
    // Handle the slider change event here if needed
    // You can access the selected value through the 'value' parameter
  };
  return (
    <Container
      size={1400}
      className="flex gap-5">
      <div className=" w-6/12">
        <form
          onSubmit={handleSubmit(generateQR)}
          className="flex flex-col gap-2">
          <div>
            <TextInput
              label="Email address"
              placeholder="Email address"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className=" text-xs text-red-500">This field is required</span>}
          </div>
          <div>
            <TextInput
              label="Subject"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span className=" text-xs text-red-500">This field is required</span>}
          </div>
          <div>
            <Textarea
              placeholder="Message"
              label="Message"
              withAsterisk
              {...register("message", { required: true })}
            />
            {errors.message && <span className=" text-xs text-red-500">This field is required</span>}
          </div>

          <Accordion variant="separated">
            <Accordion.Item
              className=" border-gray-300"
              value="reset-password">
              <Accordion.Control>
                <p className=" text-sm font-medium mr-0 pr-0">Optional Fields:</p>
              </Accordion.Control>

              <Accordion.Panel>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <label
                      className=" text-sm font-medium"
                      htmlFor="">
                      Background Color (Optional)
                    </label>
                    <TextInput value={selectedBackgroundColor} />
                    <input
                      type="color"
                      value={selectedBackgroundColor}
                      onChange={handleBackgroundColorChange}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className=" text-sm font-medium"
                      htmlFor="">
                      Foreground Color (Optional)
                    </label>
                    <TextInput value={selectedForeGroundColor} />
                    <input
                      type="color"
                      value={selectedForeGroundColor}
                      onChange={handleForeGroundColorChange}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      className=" text-sm font-medium"
                      htmlFor="">
                      Error Level (Optional)
                    </label>
                    <Select
                      defaultValue={"react"}
                      data={[
                        { value: "H", label: "High" },
                        { value: "Q", label: "Quartile" },
                        { value: "M", label: "Medium" },
                        { value: "L", label: "Low" },
                      ]}
                    />
                  </div>
                  <div className="">
                    <label
                      className=" text-sm font-medium"
                      htmlFor="">
                      Size in px: (Optional)
                    </label>

                    <Slider
                      labelAlwaysOn
                      max={1000}
                      min={150}
                      label={"px"}
                    />
                  </div>

                  <FileInput
                    label="Your resume"
                    placeholder="Your resume"
                    icon={<IconUpload size={rem(14)} />}
                  />

                  <Checkbox
                    {...register("isImageCenter", { required: false })}
                    label="Center Image:"
                  />
                  <div className="">
                    <label
                      className=" text-sm font-medium"
                      htmlFor="">
                      Image X: (Optional)
                    </label>

                    <Slider
                      labelAlwaysOn
                      max={1000}
                      min={150}
                      label={"px"}
                    />
                  </div>

                  <div className="">
                    <label
                      className=" text-sm font-medium"
                      htmlFor="">
                      Image Y: (Optional)
                    </label>

                    <Slider
                      labelAlwaysOn
                      max={1000}
                      min={150}
                      label={"px"}
                      onChange={handleSliderChange}
                    />
                  </div>

                  <Checkbox
                    {...register("excavate", { required: false })}
                    label="Excavate (dig foreground to nearest whole module)"
                  />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <div className="flex justify-end">
            <Button
              className=" bg-primary-500 "
              variant="filled"
              type="submit"
              mt="sm">
              {isLoading ? "Generating.." : "Generate"}
            </Button>
          </div>
        </form>
      </div>

      <div className=" w-6/12 flex flex-col gap-5 justify-center  items-center">
        <QRCodeSVG
          value={data}
          size={200}
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

// "use client"

// import React from 'react';
// import QRCode from 'qrcode.react';

// const Page = () => {
//   const email = 'example@example.com';
//   const subject = 'Hello QR Code';
//   const message = 'This is a test message for the QR code.';
//   const combinedData = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

//   return (
//     <div>
//       <QRCode value={combinedData} />
//     </div>
//   );
// };

// export default Page;
