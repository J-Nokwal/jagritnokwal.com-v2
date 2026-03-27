"use client";

import { useEffect, useState } from "react";
import {
  Card,
  Stack,
  Text,
  TextInput,
  Button,
  Flex,
  Spinner,
  Grid,
  Box,
} from "@sanity/ui";
import { useClient } from "sanity";

type Project = {
  title: string;
  slug: string;
  visible: boolean;
};

export function PageviewsTool() {
  const client = useClient({ apiVersion: "2024-01-01" });

  const [projects, setProjects] = useState<Project[]>([]);
  const [viewsMap, setViewsMap] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [savingSlug, setSavingSlug] = useState<string | null>(null);

  // Fetch projects
  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{title, "slug": slug.current, visible}`)
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  // Fetch pageviews (batch)
  useEffect(() => {
    const loadViews = async () => {
      if (!projects.length) return;

      setLoading(true);

      const slugs = projects.map((p) => p.slug);

      const res = await fetch("/api/pageviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET || "",  
        },
        body: JSON.stringify({
          type: "getMany",
          slugs,
        }),
      });

      const json = await res.json();
      console.log(json.data);

      setViewsMap(json.data || {});
      setLoading(false);
    };

    loadViews();
  }, [projects]);

  const updateViews = async (slug: string) => {
    setSavingSlug(slug);

    await fetch("/api/pageviews", {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET || "",  
        },
      body: JSON.stringify({
        type: "update",
        slug,
        views: viewsMap[slug],
      }),
    });

    setSavingSlug(null);
  };

  if (loading) {
    return (
      <Flex align="center" justify="center" height="fill">
        <Spinner muted />
      </Flex>
    );
  }

  return (
    <Stack space={4} padding={4}>
      <Text size={3} weight="bold">
        Project Pageviews
      </Text>

      <Grid
        columns={[1, 2, 3, 4]} // responsive: mobile → desktop
        gap={4}
      >
        {projects.map((p) => (
          <Card key={p.slug} padding={4} radius={3} shadow={1}>
            <Stack space={3}>
              <Text weight="semibold">
                <Flex align="center" gap={2}>
                  {p.title}

                  {/* Status dot */}
                  <Box
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: p.visible ? "#22c55e" : "#ef4444", // green / red
                    }}
                  />
                </Flex>
              </Text>
              <TextInput
                value={viewsMap[p.slug] ?? ""}
                inputMode="numeric"
                onChange={(e) => {
                  const value = (e.target as HTMLInputElement)?.value;

                  setViewsMap((prev) => ({
                    ...prev,
                    [p.slug]: value ? parseInt(value, 10) : 0,
                  }));
                }}
              />

              <Button
                text="Update"
                tone="primary"
                loading={savingSlug === p.slug}
                onClick={() => updateViews(p.slug)}
              />
            </Stack>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
}
