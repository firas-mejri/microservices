package com.microservice.declaration;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Declaration {
	
	private String nom;
	private String prenom;
	@Id
	private int cin;
	private String dateNaissance;
	private float revenu;
	
	
	public Declaration() {
		
	}
	
	
	public Declaration(String nom, String prenom, int cin, String dateNaissance, float revenu) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.cin = cin;
		this.dateNaissance = dateNaissance;
		this.revenu = revenu;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getCin() {
		return cin;
	}
	public void setCin(int cin) {
		this.cin = cin;
	}
	public String getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(String dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public float getRevenu() {
		return revenu;
	}
	public void setRevenu(float revenu) {
		this.revenu = revenu;
	}

}
