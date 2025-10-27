  import type { ReactNode } from "react";
  import Header from "./Header";
  import Footer from "./Footer";
  import SlideBarMenu from "./SlideBarMenu";

  interface LayoutProps {
    children: ReactNode;
  }

  export default function Layout({ children }: LayoutProps) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 w-full">
        {/* 🧭 Header */}
        <Header />

        {/* ✅ Nội dung chính (có khoảng cách rõ ràng với Header) */}
        <main className="flex flex-grow pt-30 pb-10 mt-4  mx-auto w-full px-4 gap-6">
          {/* 🧭 Sidebar luôn hiển thị bên trái */}
          <aside className="w-72 flex-shrink-0 hidden lg:block">
          <div className="sticky top-[90px] max-h-[calc(100vh-100px)] w-70.5 overflow-y-auto bg-white shadow-md border border-gray-200 rounded-xl">

              <SlideBarMenu />
            </div>
          </aside>

          {/* 🌟 Khu vực nội dung chính */}
          <section className="flex-1">{children}</section>
        </main>

        {/* 🦶 Footer */}
        <Footer />
      </div>
    );
  }
