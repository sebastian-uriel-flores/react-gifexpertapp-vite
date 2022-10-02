import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

//const apiKey = '2UwUwqFxOQTQ0VJFZnj8iLeQE92uiTOD';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState( [ { id: 1, name: 'Dragon Ball' }, { id: 2, name: 'One Piece'} ] );

    const onAddCategory = ( value ) => {
        if( categories.some( ({ name }) => name == value ) ) return;

        setCategories( [ { id: (categories.splice(-1)[0]?.id ?? 0) + 1, name: value } ], ...categories );
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory onNewCategory={ onAddCategory }/>

            { 
                categories.map( ({ id, name }) => (
                    <GifGrid 
                        key={ id } 
                        category={ name }
                    />
                ))
            }
        </>
    );
}