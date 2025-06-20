export interface Message {
  id: string;
  message: string;
  user: string;
  createdAt: Date;
}
 
export interface NewMessage {
  message: string;
  user: string;
}

export interface MessageTableResponse {
    messages: Message[];
    pageNumber: number;
    pageSize: number;
    totalData: number;
    totalPages: number;
}

export interface TableHeader {
    key: string;
    headerText: string;
}

export interface Table {
  header: TableHeader[];
  rows: TableRaw[];
  pageNumber: number;
  pageSize: number;
  totalData: number;
  totalPages: number;

}

export interface TableRaw {
  id: string;
  columns: TableColumn[];
}

export interface TableColumn {
    data: any;
}

