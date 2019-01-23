package com.microservice.bulletin;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bulletin {
	
	private String nom;
	private String dateNaissance;
	private String adresse;
	@Id
	private int cin;
	private String casierJudiciaire;
	
	
	public Bulletin() {
		
	}


	public Bulletin(String nom, String dateNaissance, String adresse, int cin, String casierJudiciaire) {
		super();
		this.nom = nom;
		this.dateNaissance = dateNaissance;
		this.adresse = adresse;
		this.cin = cin;
		this.casierJudiciaire = casierJudiciaire;
	}


	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(String dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public int getCin() {
		return cin;
	}
	public void setCin(int cin) {
		this.cin = cin;
	}
	public String getCasierJudiciaire() {
		return casierJudiciaire;
	}
	public void setCasierJudiciaire(String casierJudiciaire) {
		this.casierJudiciaire = casierJudiciaire;
	}
	

}
