package com.RecipeManagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RecipeManagement.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

}
