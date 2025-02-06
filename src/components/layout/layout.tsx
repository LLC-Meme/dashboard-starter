"use client";

import { useState, useEffect } from "react";
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
  Main
} from "meme-system-ui";

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);
  return (
    <>
      <HeaderContainer className="w-full flex items-center justify-between">
        <HStack>
          <HeaderSidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
            <Link href="/">
              {/* TODO: ここの部分を実際のものに変更 */}
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
      <Main sidebarOpen={sidebarOpen}>
        {children}
      </Main>
    </>
  );
}
