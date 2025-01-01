import React from 'react'
import {WalletIcon,DollarSign,ReceiptIcon,RefreshCcwIcon } from 'lucide-react'

import Tabs from '@/components/common/Tabs'


const FinancePage = () => {
  const tabs = [
    {
      label: 'All Transactions',
      icon: <WalletIcon width={16} height={16} />,
      content: <div>12321</div>,
    },
    {
      label: 'Revenue',
      icon: <DollarSign width={16} height={16} />,
      content: <div>12321</div>,
    },
    {
      label: 'Expenses',
      icon: <ReceiptIcon width={16} height={16} />,
      content: <div>12321</div>,
    },
    {
      label: 'Manage Recurring',
      icon: <RefreshCcwIcon width={16} height={16} />,
      content: <div>12321</div>,
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default FinancePage