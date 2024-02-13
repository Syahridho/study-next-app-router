import { render } from "@testing-library/react";
import LoginPage from "@/app/(auth)/login/page";

it("render login page", () => {
  const { container } = render(<LoginPage />);
  expect(container).toMatchSnapShot();
});
