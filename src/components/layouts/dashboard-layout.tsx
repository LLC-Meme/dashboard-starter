"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  HeaderContainer,
  HeaderSidebarController,
  ThemeSwitchContainer,
  ThemeSwitchLight,
  ThemeSwitchDark,
  ThemeSwitchSystem,
  HStack,
  VStack,
  Main,
  SidebarContainer,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarItem,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleItem,
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbSeparator,
  VSpacer,
  Button,
} from "meme-system-ui";
import { signout } from "@/actions/auth";


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <HeaderContainer className="flex items-center justify-between h-24">
        <HStack>
          <HeaderSidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
          <Link href="/dashboard">
            {/* TODO: 実際のものに変更 */}
            Replace it with logo
          </Link>
        </HStack>
        <ThemeSwitchContainer>
          <ThemeSwitchLight
            onClick={() => setTheme("light")}
            current={theme === "light"}
          />
          <ThemeSwitchDark
            onClick={() => setTheme("dark")}
            current={theme === "dark"}
          />
          <ThemeSwitchSystem
            onClick={() => setTheme("system")}
            current={theme === "system"}
          />
        </ThemeSwitchContainer>
      </HeaderContainer>

      {/* TODO: 実際のものに変更 */}
      <SidebarContainer isOpen={sidebarOpen}>
        <CustomSidebarItem href="/dashboard">
          Home
        </CustomSidebarItem>
        <SidebarGroup>
          <SidebarGroupTitle>Group 1</SidebarGroupTitle>
          <CustomSidebarItem href="/page1">
            Page 1
          </CustomSidebarItem>
          <CustomSidebarItem href="/page2">
            Page 2
          </CustomSidebarItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupTitle>Group 2</SidebarGroupTitle>
          <CustomCollapsible
            routesMap={[
              { route: "/page3-1", label: "Page 3-1" },
              { route: "/page3-2", label: "Page 3-2" },
              { route: "/page3-3", label: "Page 3-3" },
            ]}
          >
            Page 3
          </CustomCollapsible>
          <CustomSidebarItem href="/page4">
            Page 4
          </CustomSidebarItem>
          <CustomSidebarItem href="/page4">
            Page 4
          </CustomSidebarItem>
        </SidebarGroup>
        <VStack className="h-full justify-end">
          <Button onClick={signout} variant="outline">
            ログアウト
          </Button>
        </VStack>
      </SidebarContainer>

      <Main sidebarOpen={sidebarOpen}>
        <Breadcrumb />
        <VSpacer />
        {children}
      </Main>
    </>
  );
}


function Breadcrumb() {

  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let accumulatedPath = "";

  const breadcrumbItems = segments.map((segment, index) => {
    accumulatedPath += `/${segment}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return (
      <React.Fragment key={accumulatedPath}>
        {index > 0 && <BreadcrumbSeparator />}
        <BreadcrumbItem
          href={accumulatedPath}
          current={index === segments.length - 1}
        >
          {label}
        </BreadcrumbItem>
      </React.Fragment>
    );
  });

  return (
    <BreadcrumbContainer>
      {breadcrumbItems}
    </BreadcrumbContainer>
  );
}

function CustomSidebarItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const current = pathname === href;
  return (
    <SidebarItem asChild current={current}>
      <Link href={href}>{children}</Link>
    </SidebarItem>
  );
}

type RoutesMap = {
  route: string;
  label: string;
}[];

function CustomCollapsible({
  children,
  routesMap
}: {
  children: React.ReactNode;
  routesMap: RoutesMap;
}) {

  const pathname = usePathname();
  const current = routesMap.some(({ route }) => route === pathname);
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger current={current}>
        {children}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {routesMap.map(({ route, label }) => (
          <CustomCollapsibleItem key={route} href={route} pathname={pathname}>
            {label}
          </CustomCollapsibleItem>
        ))}
      </CollapsibleContent>
    </CollapsibleRoot>
  );
}


function CustomCollapsibleItem({
  children,
  href,
  pathname,
}: {
  children: React.ReactNode;
  href: string;
  pathname: string;
}) {
  const current = pathname === href;
  return (
    <CollapsibleItem asChild current={current}>
      <Link href={href}>{children}</Link>
    </CollapsibleItem>
  );
}
