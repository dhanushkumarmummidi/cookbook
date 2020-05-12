package com.RecipeManagement.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RecipeManagement.model.Recipe;
import com.RecipeManagement.service.RecipeService;


@CrossOrigin
@RestController
@RequestMapping("Recipe")
public class RecipeController {
	@Autowired
	RecipeService recipeService;
	
	@PostMapping("/addRecipe")
	public void addRecipe(@RequestBody Recipe recipe) {
		recipeService.addRecipe(recipe);
	}
	
	@PutMapping(value = "/updateRecipe/{id}")
	public void updateRecipe(@RequestBody Recipe recipe,@PathVariable int id) {
		recipeService.updateRecipe(recipe, id);
	}
	
	@GetMapping(value = "/getAllRecipes", produces = MediaType.APPLICATION_JSON_VALUE )
	public List<Recipe> getAllRecipes(){
		return recipeService.getAllRecipes();
	}

	
	@DeleteMapping("/deleteRecipe/{id}")
	public void deleteRecipe(@PathVariable("id") int userId) {
		recipeService.deleteRecipe(userId);
	}

}
