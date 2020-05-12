package com.IngredientManagement.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IngredientManagement.dao.IngredientRepository;
import com.IngredientManagement.model.Ingredients;

@Service
public class IngredientService {

	@Autowired
	IngredientRepository ingredientRepository;
	//-------------------------Add Ingredient----------------------------------------------------
	public void addIngredient(Ingredients ingredient) {
		ingredientRepository.save(ingredient);
	}
	//------------------------Update Ingredient---------------------------------------------------- 
	public void updateIngredient(Ingredients newIngredient,int id) {
		Ingredients ingredient = ingredientRepository.getOne(id);
		
		ingredient.setIngrd_name(newIngredient.getIngrd_name());
		ingredient.setIngrd_description(newIngredient.getIngrd_description());
		ingredient.setIngrd_id(newIngredient.getIngrd_id());
		ingredient.setRecp_id(newIngredient.getRecp_id());
		ingredient.setUser_id(newIngredient.getUser_id());

		
		ingredientRepository.save(ingredient);
	}
	//------------------------Delete Ingredient--------------------------------------------------
	public void deleteIngredient(int id) {
		Optional<Ingredients> ingredient = ingredientRepository.findById(id);
		if (ingredient.isPresent()) {
			ingredientRepository.deleteById(id);
		}
	}
	//--------------------List of All Ingredients-----------------------------------------------
	public List<Ingredients> getAllingredients(){
		return ingredientRepository.findAll();
	}
}
