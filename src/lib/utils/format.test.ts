import { describe, it, expect } from "vitest";
import { formatNumber, formatCurrency } from "./format";

describe("formatNumber", () => {
  it("カンマを3桁ごとに挿入", () => {
    expect(formatNumber(1234)).toBe("1,234");
    expect(formatNumber(1000000)).toBe("1,000,000");
  });

  it("小数点以下にはカンマを挿入しない", () => {
    expect(formatNumber(1234.56)).toBe("1,234.56");
    expect(formatNumber(9876543.21)).toBe("9,876,543.21");
  });

  it("1000未満の値にはなにもしない", () => {
    expect(formatNumber(999)).toBe("999");
  });

  it("負の値にもカンマを挿入", () => {
    expect(formatNumber(-1234567.89)).toBe("-1,234,567.89");
  });

  it("入力が0の場合", () => {
    expect(formatNumber(0)).toBe("0");
  });
});

describe("formatCurrency", () => {
  it("カンマとともに'¥'マークを挿入", () => {
    expect(formatCurrency(1234.56)).toBe("¥1,234.56");
    expect(formatCurrency(1000000)).toBe("¥1,000,000");
  });
});
