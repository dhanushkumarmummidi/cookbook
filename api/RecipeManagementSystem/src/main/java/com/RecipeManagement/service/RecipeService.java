package com.RecipeManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RecipeManagement.dao.RecipeRepository;
import com.RecipeManagement.model.Recipe;

@Service
public class RecipeService {
	@Autowired
	RecipeRepository recipeRepository;
	
	//-------------------------Add Recipe----------------------------------------------------
		public void addRecipe(Recipe recipe) {
			recipeRepository.save(recipe);
		}
	//-------------------------Edit Recipe----------------------------------------------------
		public void updateRecipe(Recipe recipe,int id) {
			Recipe recipes = recipeRepository.getOne(id);
			
			recipes.setRecp_id(recipes.getRecp_id());
			recipes.setRecp_description(recipes.getRecp_description());
			recipes.setRecp_name(recipes.getRecp_name());
			
			recipeRepository.save(recipe);
		}
		//--------------------List of All Recipes-----------------------------------------------
		public List<Recipe> getAllRecipes(){
			return recipeRepository.findAll();
		}
		
		/**
		 * delete category by id
		 * @param id
		 */
		public void deleteRecipe(int id) {
			recipeRepository.deleteById(id);
		}
		
}
