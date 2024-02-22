import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Attachment, Chapter, Course } from "@prisma/client";
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

export interface PriceFormProps {
  initialData: Course;
  courseId: string;
}

export interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

export interface ChaptersFormProps {
  initialData: Course & { chapters: Chapter[] };
  courseId: string;
}

export interface ChaptersListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
}

export interface ChapterTitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
  chapterId: string;
}

export interface EditorProps {
  onChange(value: string): void;
  value: string;
}

export interface PreviewProps {
  value: string;
}

export interface ChapterDescriptionFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

export interface ChapterAccessFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}
