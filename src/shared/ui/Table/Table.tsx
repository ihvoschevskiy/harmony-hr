import { FC } from "react";
import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/shadcn/table";
import { cn } from "@shared/utils";

interface TableProps {
  header: Record<string, string>;
  data: Array<Record<string, string | number>>;
  className?: string;
}

const Table: FC<TableProps> = ({ header, data, className }) => {
  return (
    <ShadcnTable className={className}>
      <TableHeader className="bg-accent-100">
        <TableRow>
          {Object.values(header).map((item, index) => (
            <TableHead
              key={index}
              className={cn(index === 1 && "s:hidden xl:table-cell")}
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="[&_tr:last-child]:border-2">
        {data.map((item, index) => (
          <TableRow key={index} className="border-2 border-b-accent-300">
            {Object.values(item).map((item, index) => (
              <TableCell
                key={index}
                className={cn(index === 1 && "s:hidden xl:table-cell")}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </ShadcnTable>
  );
};

export default Table;
