export interface SearchBarPropsType {
    setSearchTerm: (data: string) => void;
    searchTerm: string;
}

  export interface MyFiles {
    icons: string;
    title: string;
    details: string;
    color: string;
}[]

export interface DataType{
    myFile:MyFiles[]
}

export interface FileProps{
    myFiles:MyFiles[]
}