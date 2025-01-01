/**
 * 格式化数值为指定类型的字符串
 * @param value - 要格式化的数值
 * @param type - 格式化类型
 * @returns 格式化后的字符串
 */
const formatValue = (value: number | string, type: string): string => {
  // 确保输入值为数字
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  switch (type) {
    case 'currency':
      return `$${numValue}`;
    case 'percentage':
      return `${numValue}%`;
    case 'hours':
      return `${numValue}h`;
    default:
      return String(numValue);
  }
};

type DateFormat = 'yyyy/MM/dd' | 'yyyy-MM-dd HH:mm' | 'yyyy-MM-dd' | 'MM/dd/yyyy';

const formatDate = (dateString: string, format: DateFormat = 'yyyy-MM-dd'): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: format.includes('HH') ? '2-digit' : undefined,
    minute: format.includes('mm') ? '2-digit' : undefined,
  };

  const formatted = new Intl.DateTimeFormat('zh-CN', options)
    .format(date)
    .replace(/\//g, format.includes('/') ? '/' : '-');

  return formatted;
};

export { formatValue, formatDate };
export type { DateFormat }; 