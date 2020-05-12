package com.IngredientManagement.api;

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

import com.IngredientManagement.model.Ingredients;
import com.IngredientManagement.service.IngredientService;

@CrossOrigin
@RestController
@RequestMapping("Ingredient")
public class IngredientController {

	@Autowired
	IngredientService ingredientService;
	
	@PostMapping("/addIngredient")
	public void addActivity(@RequestBody Ingredients ingredient) {
		ingredientService.addIngredient(ingredient);
	}	
	@PutMapping(value = "/updateIngredient/{id}")
	public void updateActivity(@RequestBody Ingredients ingredient,@PathVariable int id) {
		ingredientService.updateIngredient(ingredient, id);
	}	
	@DeleteMapping(value = "/deleteIngredient/{id}")
	public void deleteActivity(@PathVariable int id) {
		ingredientService.deleteIngredient(id);
	}
	@GetMapping(value = "/getAllIngredient", produces = MediaType.APPLICATION_JSON_VALUE )
	public List<Ingredients> getAllIngredient(){
		return ingredientService.getAllingredients();
	}
}
