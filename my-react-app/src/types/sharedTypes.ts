export interface Message {
  id: string;
  message: string;
  name: string;
  time: Date;
}
 
export interface NewMessage {
  message: string;
  name: string;
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
}

export interface TableRaw {
  id: string;
  columns: TableColumn[];
}

export interface TableColumn {
    data: any;
}

