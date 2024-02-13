import { render } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";

it("renders homepage unchanged", () => {
  const { container } = render(
    <AboutLayout>
      <AboutPage />
    </AboutLayout>
  );
  expect(container).toMatchSnapshot();
});
