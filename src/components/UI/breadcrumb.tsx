"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbHome,
  BreadcrumbSeparator,
} from "meme-system-ui/components";

interface Link {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  links: Link[];
}

export default function Breadcrumb({
  links
}: BreadcrumbProps) {
  const pathname = usePathname();

  return (
    <BreadcrumbContainer>
      <Link href="/dashboard">
        <BreadcrumbHome current={pathname === "/dashboard"} asChild>
          <span />
        </BreadcrumbHome>
      </Link>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <BreadcrumbSeparator />
          <BreadcrumbItem
            current={pathname === link.href}
            asChild
          >
            <Link href={link.href}>
              {link.label}
            </Link>
          </BreadcrumbItem>
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
}