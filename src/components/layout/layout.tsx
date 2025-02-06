"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <>
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
        <SidebarGroup>
          <SidebarGroupTitle>Group 1</SidebarGroupTitle>
          <SidebarItem asChild>
            <Link href="/page1">Page 1</Link>
          </SidebarItem>
          <SidebarItem asChild>
            <Link href="/page2">Page 2</Link>
          </SidebarItem>
          <SidebarItem asChild>
            <Link href="/page3">Page 3</Link>
          </SidebarItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupTitle>Group 2</SidebarGroupTitle>
          <CollapsibleRoot>
            <CollapsibleTrigger>Page 3</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem asChild>
                <Link href="/page3-1">Page 3-1</Link>
              </CollapsibleItem>
              <CollapsibleItem asChild>
                <Link href="/page3-2">Page 3-2</Link>
              </CollapsibleItem>
              <CollapsibleItem asChild>
                <Link href="/page3-3">Page 3-3</Link>
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <SidebarItem asChild>
            <Link href="/page4">Page 4</Link>
          </SidebarItem>
          <SidebarItem asChild>
            <Link href="/page5">Page 5</Link>
          </SidebarItem>
        </SidebarGroup>
      </SidebarContainer>

      <Main sidebarOpen={sidebarOpen}>
        {children}
      </Main>
    </>
  );
}
