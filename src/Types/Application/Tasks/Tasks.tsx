
export interface TasksPropsType {
    activeToggle: (num: string) => void;
    activeTab:string
  }

  export interface TasksPropsTypes {
    activeToggle: (num: string) => void;
  }


export interface CreatePropsTypes {
    tagCallback: (val: boolean) => void, tagModal: boolean
  }
  ​
export interface TaskTemp {
    id: number
    title: string
    collection: string
    description: string
  }

export interface AssignPropsType {
  title: string;
}

export interface EmptyPropsType {
  title: string;
}


export interface FormDataTypes{
  description:string;
  title:string;
}

export interface TasksType {
  activeTab: string;
  allTasks: TaskTemp[]
}
