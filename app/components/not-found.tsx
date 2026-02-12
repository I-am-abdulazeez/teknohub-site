import { Link } from "react-router";
import { Button } from "@heroui/button";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0B2B5D] to-[#0a1f42]">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#EC820C] mb-4">404</h1>
          <div className="w-24 h-1 bg-[#EC820C] mx-auto mb-8"></div>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as={Link}
            to="/"
            className="bg-[#EC820C] text-white font-semibold hover:bg-[#d67509] transition-colors"
            radius="sm"
            size="lg"
          >
            Go Home
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="bordered"
            className="border-2 border-[#EC820C] text-[#EC820C] font-semibold hover:bg-[#EC820C]/10 transition-colors"
            radius="sm"
            size="lg"
          >
            Contact Support
          </Button>
        </div>

        <div className="mt-16">
          <p className="text-gray-400 text-sm">
            Need help? We're here to assist you with your Microsoft solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
