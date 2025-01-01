import { z } from 'zod';
import type { ButtonProps, LinkProps } from '@/types/components/menu';

// Schema 定义
const baseSchema = z.object({
  name: z.string(),
  icon: z.any(),
  text: z.string().optional(),
  className: z.string().optional()
});

const linkSchema = baseSchema.extend({
  path: z.string()
});

const buttonSchema = baseSchema.extend({
  onClick: z.function().optional(),
  label: z.string().optional()
});

// 验证函数
export const validateMenuItem = (item: unknown, type: 'link' | 'button') => {
  if (type === 'link') {
    return linkSchema.parse(item) as LinkProps;
  }
  return buttonSchema.parse(item) as ButtonProps;
}; 