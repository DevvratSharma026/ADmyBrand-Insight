'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CampaignData } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<CampaignData>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="hover:bg-transparent p-0 font-semibold text-base hover:text-primary transition-colors duration-300"
      >
        Campaign Name
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-semibold text-base">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge 
          variant={
            status === 'active' ? 'default' : 
            status === 'paused' ? 'secondary' : 
            'outline'
          }
          className={
            status === 'active' ? 'bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 font-semibold px-3 py-1.5 text-sm' :
            status === 'paused' ? 'bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800 font-semibold px-3 py-1.5 text-sm' :
            'bg-slate-100/80 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300 border-slate-200 dark:border-slate-800 font-semibold px-3 py-1.5 text-sm'
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'clicks',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="hover:bg-transparent p-0 font-semibold text-base hover:text-primary transition-colors duration-300"
      >
        Clicks
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-mono text-base font-semibold">
        {row.getValue<number>('clicks').toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: 'impressions',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="hover:bg-transparent p-0 font-semibold text-base hover:text-primary transition-colors duration-300"
      >
        Impressions
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-mono text-base font-semibold">
        {row.getValue<number>('impressions').toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: 'ctr',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="hover:bg-transparent p-0 font-semibold text-base hover:text-primary transition-colors duration-300"
      >
        CTR (%)
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-mono text-base font-semibold">
        {row.getValue<number>('ctr').toFixed(2)}%
      </div>
    ),
  },
  {
    accessorKey: 'cost',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="hover:bg-transparent p-0 font-semibold text-base hover:text-primary transition-colors duration-300"
      >
        Cost
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
    cell: ({ row }) => {
      const cost = parseFloat(row.getValue('cost'));
      return (
        <div className="text-right font-mono text-base font-semibold">
          ${cost.toFixed(2)}
        </div>
      );
    },
  },
  {
    accessorKey: 'roas',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="hover:bg-transparent p-0 font-semibold text-base hover:text-primary transition-colors duration-300"
      >
        ROAS
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-mono text-base font-semibold">
        {row.getValue<number>('roas').toFixed(1)}x
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const campaign = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-primary/10 transition-colors duration-300 rounded-lg">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-card border-0 shadow-2xl">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(campaign.id)}
            >
              Copy campaign ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit campaign</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];