package com.IngredientManagement.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.IngredientManagement.model.Ingredients;

public interface IngredientRepository extends JpaRepository<Ingredients, Integer> {
	@Query("SELECT a From Ingredient a order by act_date DESC")
	public List<Ingredients> getAllingredients();
	
	@Query("SELECT a from Ingredient a where a.user_id =:userId and a.recp_id =:recpId ")
	public List<Ingredients> getActivityByUserCat(@Param("userId") int userId,@Param("recpId") int recpId);
}
