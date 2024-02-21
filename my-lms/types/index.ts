import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Course } from "@prisma/client";
import { LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

export interface DescriptionFormProps {
  initialData: Course;
  courseId: string;
}

export interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

export interface FileUploadProps {
  onChange(url?: string): void;
  endpoint: keyof typeof ourFileRouter;
}

export interface ComboboxProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange(value?: string): void;
}

export interface CategoryFormProps {
  initialData: Course;
  courseId: string;
  options: { label: string; value: string }[];
}
