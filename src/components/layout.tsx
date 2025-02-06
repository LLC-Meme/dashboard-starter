"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme, ThemeProvider as NextThemesProvider } from "next-themes";
import {
  HeaderContainer,
  HeaderSidebarController,
  ThemeSwitchContainer,
  ThemeSwitchLight,
  ThemeSwitchDark,
  ThemeSwitchSystem,
  HStack,
  Main,
  SidebarContainer,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarItem,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleItem,
} from "meme-system-ui";

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Content>
        {children}
      </Content>
    </NextThemesProvider>
  );
}

function Content({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HeaderContainer className="w-full flex items-center justify-between">
        <HStack>
          <HeaderSidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
            <Link href="/">
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
        <CustomSidebarItem href="/">
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
          <CollapsibleRoot>
            <CollapsibleTrigger>Page 3</CollapsibleTrigger>
            <CollapsibleContent>
              <CustomCollapsibleItem href="/page3-1">
                Page 3-1
              </CustomCollapsibleItem>
              <CustomCollapsibleItem href="/page3-2">
                Page 3-2
              </CustomCollapsibleItem>
              <CustomCollapsibleItem href="/page3-3">
                Page 3-3
              </CustomCollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <CustomSidebarItem href="/page4">
            Page 4
          </CustomSidebarItem>
          <CustomSidebarItem href="/page4">
            Page 4
          </CustomSidebarItem>
        </SidebarGroup>
      </SidebarContainer>

      <Main sidebarOpen={sidebarOpen}>
        {children}
      </Main>
    </NextThemesProvider>
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

function CustomCollapsibleItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const current = pathname === href;
  return (
    <CollapsibleItem asChild current={current}>
      <Link href={href}>{children}</Link>
    </CollapsibleItem>
  );
}
