import { useState } from "react";

import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Spiderman' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [...cat, 'ironman'] )

    }
    
    return(
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
                currentCategories = { categories }
            />
        
            { 
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={category} />
                )) 
            }

        </>
    );
    
}