import { NavbarRoutes } from "@/components/navbar-routes";

import { CourseNavbarProps } from "@/types";
import { CourseMobileSidebar } from "./course-mobile-sidebar";

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
