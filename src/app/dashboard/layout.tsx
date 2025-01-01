
import Header from "@/components/features/dashboard/header/Header";
import LeftSidebar from "@/components/features/dashboard/sidebar/LeftSidebar";
import RightSidebar from "@/components/features/dashboard/sidebar/RightSidebar";
type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      <LeftSidebar className="fixed left-4 top-1/2 -translate-y-1/2"/>
      <RightSidebar className="fixed right-4 top-1/2 -translate-y-1/2"/>
      <main className="relative min-h-screen transition-all duration-300 ease-in-out ml-[4.5rem] mr-[4.5rem] pb-14">
        <Header />
        <div className="container">
            <div className="relative group backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl dark:shadow-sm dark:hover:shadow-md transition-all duration-300 ease-in-out bg-white/50 dark:bg-gray-900/50 hover:bg-white/50 dark:hover:bg-gray-900/50 hover:border-gray-200 dark:hover:border-gray-800/50 p-6 pt-0 w-full md:px-8 md:py-6 min-h-[calc(100vh-4rem)]">
            {children}
            </div>
        </div>
      </main>
    </div>
  );
};

export default layout;
