import { render, screen, cleanup } from "@testing-library/react";
import Profile from "../Profile";

// Automatically cleanup after each test
afterEach(cleanup);

test("should render Profile component", () => {
  // Mock data for userInfo
  const mockUserInfo = {
    images: "path/to/image.jpg",
    name: "John",
    lastname: "Doe",
    country: "USA",
    email: "john.doe@example.com",
  };

  // Mock data for userEvents
  const mockUserEvents = [
    { id: 1, title: "Event 1", description: "Description 1" },
    { id: 2, title: "Event 2", description: "Description 2" },
  ];

  // Mock logout function
  const mockLogout = jest.fn();

  render(
    <Profile
      userInfo={mockUserInfo}
      logout={mockLogout}
      userEvents={mockUserEvents}
    />
  );

  const profileElement = screen.getByTestId("Profile-1");
  expect(profileElement).toBeInTheDocument();

  const imageElement = screen.getByAltText("Profile Image");
  expect(imageElement).toHaveAttribute("src", "path/to/image.jpg");

  const nameElement = screen.getByText(/name: John/i);
  expect(nameElement).toBeInTheDocument();

  const lastnameElement = screen.getByText(/Lastname: Doe/i);
  expect(lastnameElement).toBeInTheDocument();

  const countryElement = screen.getByText(/Country: USA/i);
  expect(countryElement).toBeInTheDocument();

  const emailElement = screen.getByText(/Email: john.doe@example.com/i);
  expect(emailElement).toBeInTheDocument();

  // Check if user events are rendered
  mockUserEvents.forEach((event) => {
    const eventTitleElement = screen.getByText(event.title);
    expect(eventTitleElement).toBeInTheDocument();
  });
});
