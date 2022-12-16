import React from "react";
import './RecipeCreationModal.scss'

const RecipeCreationModal = ({children, visible, setVisible}) => {

    const rootClasses = ["recipeModal"]

   if(visible) {
       rootClasses.push("active")
   } 

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
          <div className="recipeModalContent" onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
    )
};

export default RecipeCreationModal;