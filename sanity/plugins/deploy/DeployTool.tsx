"use client";

import { useState } from "react";
import { Box, Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { RocketIcon } from "@sanity/icons";
import { triggerDeploy } from "@/action/deploy";

type Status = "idle" | "loading" | "success" | "error";

export function DeployTool() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleDeploy = async () => {
    setStatus("loading");
    setErrorMsg("");

    const result = await triggerDeploy();

    if (result.ok) {
      setStatus("success");
    } else {
      setErrorMsg(result.error ?? "Failed to trigger deployment.");
      setStatus("error");
    }
  };

  return (
    <Flex align="center" justify="center" height="fill" padding={6}>
      <Card padding={6} radius={3} shadow={1} style={{ maxWidth: 480, width: "100%" }}>
        <Stack space={5}>
          <Stack space={2}>
            <Text size={3} weight="bold">
              Deploy Website
            </Text>
            <Text size={1} muted>
              Trigger a fresh Vercel deployment of jagritnokwal.com.
            </Text>
          </Stack>

          <Button
            text="REDEPLOY WEBSITE"
            tone="primary"
            icon={RocketIcon}
            loading={status === "loading"}
            disabled={status === "loading"}
            onClick={handleDeploy}
            style={{ width: "100%" }}
          />

          {status === "success" && (
            <Box>
              <Text size={1} style={{ color: "#22c55e" }}>
                Deployment triggered successfully. It will be live in ~1 minute.
              </Text>
            </Box>
          )}

          {status === "error" && (
            <Box>
              <Text size={1} style={{ color: "#ef4444" }}>
                {errorMsg}
              </Text>
            </Box>
          )}
        </Stack>
      </Card>
    </Flex>
  );
}
