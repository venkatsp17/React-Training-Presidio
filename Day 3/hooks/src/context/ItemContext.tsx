import { createContext, useEffect, useReducer } from "react";

type ContextProviderProps = {
    children: React.ReactNode;
  };

enum ItemActionKind {
    Add = 'Add',
    Remove = 'Remove',
    Search = 'Search'
}

interface ItemActionType {
    type: ItemActionKind;
    payload: ItemContextInputType;
}

type ItemContextType = {
    items: 
        {
            id:number;
            name: string;
            description: string;
        }[],
    addItem: (data: ItemContextInputType) => void,
    removeItem: (id: number) => void,
    setsearchItem: (keyword: string) => void
    searchKeyword: string
};

const initialState: ItemContextType = {
    items: [
        {
            id:0,
            name:"Venkat",
            description:"fsfdsfdsf"
        }
    ],
    addItem: () => {},
    removeItem: () => {},
    setsearchItem: ()=>{},
    searchKeyword: ""
};

type ItemContextInputType = {
    id: number
    name: string;
    description: string;
};

function ItemReducer(state: ItemContextType, action: ItemActionType):ItemContextType {
    const { type, payload } = action;
    let items;
    switch (type) {
        case ItemActionKind.Add:
            return {
                ...state,
                items: [...state.items, payload]
            };
        case ItemActionKind.Remove:
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload.id)
            };
        case ItemActionKind.Search:
            return {
                ...state,
                searchKeyword: payload.name
            };
        default:
            return state;
    }
}
  

export const ItemContext = createContext<ItemContextType>(initialState);



export const ItemContextProvider = ({children}:ContextProviderProps) => {

    const [state, dispatch] = useReducer(ItemReducer, initialState);

    useEffect(()=>{
        console.log("Items List Updated!"); 
    },[state]);

    const value = {
        items: state.items,
        addItem: (data: ItemContextInputType) => {
            dispatch({ type: ItemActionKind.Add, payload: data });
        },
        removeItem: (id: number) => {
            dispatch({ type: ItemActionKind.Remove, payload: { id, name: '', description: '' } });
        },
        searchKeyword: state.searchKeyword,
        setsearchItem: (keyWord: string) =>{
            dispatch({type: ItemActionKind.Search, payload: {id:0, name:keyWord, description:''}})
        }
    };

    return <ItemContext.Provider value={value}>
        {children}
    </ItemContext.Provider>
}
