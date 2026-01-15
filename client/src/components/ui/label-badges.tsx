'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface LabelInterface {
   id: string;
   name: string;
   color: string;
   animate?: boolean;
}

interface LabelBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
   labels: LabelInterface[];
}

const LabelBadge = React.forwardRef<HTMLDivElement, LabelBadgeProps>(
   ({ labels, className, ...props }, ref) => {
      if (!labels || labels.length === 0) {
         return null;
      }

      return (
         <div ref={ref} className={cn('flex flex-wrap gap-2', className)} {...props}>
            {labels.map((l) => (
               <Badge
                  key={l.id}
                  variant="outline"
                  className="gap-1.5 rounded-full border bg-background text-foreground py-1 px-3"
               >
                  <span
                     className={cn(
                        "size-2 rounded-full",
                        l.animate && "animate-pulse"
                     )}
                     style={{ backgroundColor: l.color }}
                     aria-hidden="true"
                  ></span>
                  {l.name}
               </Badge>
            ))}
         </div>
      );
   }
);
LabelBadge.displayName = 'LabelBadge';

export default LabelBadge;
