import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import Pizza from "../Pizza";

test("alt text renders on image", async () => {
  const name = "My favorite pizza";
  const src = "https://picsum.photo/200";
  render(
    <Pizza name={name} image={src} description="issa pizza" />,
  );

  const img = page.getByRole("img");

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
