"use client";
import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ContentLayout } from "./content-layout";
import { MenuSidebar } from "../Sidebar";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MenuSidebar />
      <main className="relative w-full h-full bg-bg-page">
        <SidebarTrigger />
        <ContentLayout>{children}</ContentLayout>
      </main>
    </SidebarProvider>
  );
}
