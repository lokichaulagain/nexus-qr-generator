"use client";
import { useRef } from "react";
import { ActionIcon, Button, Container, Tabs } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import WifiIcon from "./Icons/WifiIcon";
import IconButton from "./IconButton";

export default function QrGenerateTabs() {
  return (
    <Container
      size={1400}
      className="flex justify-center">
      <div className="flex justify-center flex-wrap gap-3">
        <IconButton
          icon={<WifiIcon />}
          title={"SMS"}
        />

        <IconButton
          icon={<WifiIcon />}
          title={"Wi-Fi"}
        />

        <IconButton
          icon={<WifiIcon />}
          title={"Phone"}
        />

        <IconButton
          icon={<WifiIcon />}
          title={"Text"}
        />

        <IconButton
          icon={<WifiIcon />}
          title={"Note"}
        />

        <IconButton
          icon={<WifiIcon />}
          title={"SNS"}
        />
        <IconButton
          icon={<WifiIcon />}
          title={"Mail"}
        />
      </div>
    </Container>
  );
}

