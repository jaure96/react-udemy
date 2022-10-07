import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe("Pruebas en <GifItem />", () => {
  const title = "A simple title";
  const url = "http://one-punch.com/saitama.jpg";

  test("Had to match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("It should show the url and alt with the given image", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("It should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
