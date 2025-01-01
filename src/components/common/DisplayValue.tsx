import { formatValue } from '@/lib/utils/formatters';
import {MetricConfig} from '@/types/components/metrics'


interface DisplayValueProps {
  value: number | string;
  className?: string;
  type: MetricConfig['format']
}

const DisplayValue = ({ value, type, className = '' }: DisplayValueProps) => {
  return (
    <span className={className}>
      {formatValue(value, type)}
    </span>
  );
};

export default DisplayValue; 