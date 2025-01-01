'use client';

import type { ActionButtonProps } from "@/types/components/badge";
import { XIcon } from '@/svgs/x';
import { TagsIcon, MoonIcon, MessageCircleIcon } from "lucide-react";

export const ACTION_BUTTONS: ActionButtonProps[] = [
  {
    icon: <TagsIcon className="w-8 h-8" />,
    onClick: () => console.log('Tags clicked')
  },
  {
    icon: <MoonIcon />,
    onClick: () => console.log('Theme toggled')
  },
  {
    icon: <XIcon />,
    onClick: () => console.log('X clicked')
  },
  {
    icon: <MessageCircleIcon />,
    label: 'Leave Feedback',
    onClick: () => console.log('Message clicked')
  }
]; 