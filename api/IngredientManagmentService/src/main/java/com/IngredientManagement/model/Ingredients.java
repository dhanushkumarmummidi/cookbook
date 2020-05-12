package com.IngredientManagement.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Ingredients {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ingrd_id;
	private String ingrd_name;
	private String ingrd_description;
	private int user_id;
	private int recp_id;
	public int getIngrd_id() {
		return ingrd_id;
	}
	public void setIngrd_id(int ingrd_id) {
		this.ingrd_id = ingrd_id;
	}
	public String getIngrd_name() {
		return ingrd_name;
	}
	public void setIngrd_name(String ingrd_name) {
		this.ingrd_name = ingrd_name;
	}
	public String getIngrd_description() {
		return ingrd_description;
	}
	public void setIngrd_description(String ingrd_description) {
		this.ingrd_description = ingrd_description;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getRecp_id() {
		return recp_id;
	}
	public void setRecp_id(int recp_id) {
		this.recp_id = recp_id;
	}

	
}
