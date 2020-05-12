package com.RecipeManagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int recp_id;
	private String recp_name;
	private String recp_description;
	public int getRecp_id() {
		return recp_id;
	}
	public void setRecp_id(int recp_id) {
		this.recp_id = recp_id;
	}
	public String getRecp_name() {
		return recp_name;
	}
	public void setRecp_name(String recp_name) {
		this.recp_name = recp_name;
	}
	public String getRecp_description() {
		return recp_description;
	}
	public void setRecp_description(String recp_description) {
		this.recp_description = recp_description;
	}
	
	
}
