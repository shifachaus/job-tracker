"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState("organize");

  return (
    <section className="py-16 border-t">
      <div className="container mx-auto px-4 ">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab("organize")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors
                     ${
                       activeTab === "organize"
                         ? "bg-primary text-white"
                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
            >
              Organize Application
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors
                     ${
                       activeTab === "hired"
                         ? "bg-primary text-white"
                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("board")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors
                     ${
                       activeTab === "board"
                         ? "bg-primary text-white"
                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
            >
              Manage Boards
            </Button>
          </div>
          {/* imgaes */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === "organize" && <p>organize</p>}
            {activeTab === "hired" && <p>hired</p>}
            {activeTab === "board" && <p>board</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTabs;
