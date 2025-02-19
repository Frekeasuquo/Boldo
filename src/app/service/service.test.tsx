import { render, screen } from "@testing-library/react";
import Service from "./page"
import { useRouter } from "next/router";

// Mock Next.js `Image` component to avoid real image rendering issues
jest.mock("next/image", () => ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
));

// Mock `next/link` to avoid routing issues
jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock `CarouselComment` component (since it's not the focus of these tests)
jest.mock("@/src/components/Carousel", () => () => <div>Mock Carousel</div>);

describe("Service Component", () => {
    it("renders the header section correctly", () => {
        render(<Service />);
        expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Handshake infographic mass market crowdfunding iteration./i)
        ).toBeInTheDocument();
    });

    it("renders service cards with images, titles, and descriptions", () => {
        render(<Service />);
        const serviceCards = [
            { title: "Cool feature title", description: "Learning curve network effects return on investment." },
            { title: "Even cooler feature", description: "Learning curve network effects return on investment." },
            { title: "Cool feature title", description: "Learning curve network effects return on investment." },
        ];

        serviceCards.forEach((card) => {
            expect(screen.getByText(card.title)).toBeInTheDocument();
            expect(screen.getByText(card.description)).toBeInTheDocument();
        });
    });

    it("renders images in the service section", () => {
        render(<Service />);
        const images = [
            "/images/rectangle1.png",
            "/images/rectangle2.png",
            "/images/rectangle3.png",
        ];

        images.forEach((src) => {
            expect(screen.getByAltText("Cool feature title")).toHaveAttribute("src", src);
        });
    });

    it("renders the blog section with blog details", () => {
        render(<Service />);
        const blogTitles = [
            "Pitch termsheet backing validation focus release.",
            "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
            "Beta prototype sales ipad gen-z marketing network effects value proposition.",
        ];

        blogTitles.forEach((title) => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });

        const blogAuthors = ["Chandler Bing", "Rachel Green", "Monica Geller"];
        blogAuthors.forEach((author) => {
            expect(screen.getByText(author)).toBeInTheDocument();
        });
    });

    it("renders buttons in the Service component", () => {
        render(<Service />);
        expect(screen.getByText("Start now")).toBeInTheDocument();
        expect(screen.getByText("Load more")).toBeInTheDocument();
    });

    it("renders the carousel component", () => {
        render(<Service />);
        expect(screen.getByText("Mock Carousel")).toBeInTheDocument();
    });
});
