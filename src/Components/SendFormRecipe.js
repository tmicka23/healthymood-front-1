import React, { useState } from 'react';
import API from '../Services/Api';

const SendFormRecipe = () => {
 /* const url = '/recipe_categories';
  const url2 = '/meal_types';
  const [regimeTypes, setRegimeTypes] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  useEffect(() => {
    API.get(url)
      .then((res) => res.data)
      .then((data) => {
        setRegimeTypes(data.data);
      });
    API.get(url2)
      .then((res) => res.data)
      .then((data) => {
        setMealTypes(data.data);
      });
  }, []);*/

  const [inputs, setInputs] = useState({ username: '', email: '', title: '', description: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { username, email, title, description } = inputs;
    API.post('/post_recipe', {
      username,
      email,
      title,
      text: description
    });
    console.log(inputs);
  };

  return (
    <div className='form-recipe'>
      <h2>Proposer ma recette</h2>
      <form id='post-recipe-form' onSubmit={handleSubmit} method='POST'>
        <div className='author-id'>
          <div className='author-username'>
            <label>Pseudo : </label>
            <input type='text' name='username' value={inputs.username} onChange={handleChange} placeholder='Entrez votre pseudo' />
          </div>
          <div className='author-mail'>
            <label>Email : </label>
            <input type='email' name='email' value={inputs.email} onChange={handleChange} placeholder='Entrez votre adresse email' />
          </div>
        </div>
        <div className='form-title'>
          <label>Titre : </label>
          <input type='text' name='title' value={inputs.title} onChange={handleChange} placeholder='Entrez un Titre' />
        </div>
        <p>Choisissez un ou plusieurs critères :</p>
        {/* <div className='regime-type-select'>
        <TypeMealCheckBox mealTypes={mealTypes} register={register} />
          <TypeRegimeCheckBox regimeTypes={regimeTypes} register={register} />
  </div>
        <div className='ingredient-input'>
          <label>Mes ingrédients : </label>
          <textarea name='ingredients' ref={register} placeholder='Entrez vos ingrédients' />
  </div> */}
        <div className='recipe-post-description'>
          <label>Description de ma recette : </label>
          <textarea name='description' value={inputs.description} onChange={handleChange} placeholder='Détaillez votre recette' />
        </div>
        {/* <div className='download'>
          <label>Télécharger une image : </label>
          <input type='file' name='pieceJointe' ref={register} multiple='oui' accept='image/png, image/jpeg, image/jpg' />
</div> */}
        <button type='submit' className='send'>Envoyer</button>
      </form>
    </div>
  );
};

export default SendFormRecipe;
