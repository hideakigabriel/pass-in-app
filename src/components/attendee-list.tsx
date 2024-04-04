import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 w-72 py-1.5 border border-white/10 rounded-lg">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 border-0 p-0 text-sm outline-none"
            type="text"
            placeholder="Buscar participante..."
            name=""
            id=""
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader
              style={{ width: 48 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >
              <input
                className="size-4 bg-black/20 rounded border border-white/10 cursor-pointer checked:bg-orange-400"
                type="checkbox"
              />
            </TableHeader>
            <TableHeader>
              Código
            </TableHeader>
            <TableHeader>
              Participante
            </TableHeader>
            <TableHeader>
              Data de inscrição
            </TableHeader>
            <TableHeader>
              Data do check-in
            </TableHeader>
            <th
              style={{ width: 64 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            ></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, id) => {
            return (
              <tr
                key={id}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <TableCell>
                  <input
                    className="size-4 bg-black/20 rounded border border-white/10 cursor-pointer checked:bg-orange-400 text-orange-400"
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>64ba964b</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Gabriel Hideaki Souza Kumai
                    </span>
                    <span>hideaki@design.com.br</span>
                  </div>
                </TableCell>
                <TableCell>
                  7 dias atrás
                </TableCell>
                <TableCell>
                  3 dias atrás
                </TableCell>
                <TableCell>
                  <IconButton
                    transparent
                    className="bg-black/20 border border-white/10 rounded-md p-1.5"
                  >
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando 10 de 228 itens
            </TableCell>
            <TableCell
              className="text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
