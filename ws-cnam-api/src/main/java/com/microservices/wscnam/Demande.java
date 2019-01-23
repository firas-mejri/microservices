package com.microservices.wscnam;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Demande {

	@Id
	private String numAffiliation;
	private String etat;
	
	
	public Demande() {
		
	}
	
	public Demande(String numAffiliation, String etat) {
		super();
		this.numAffiliation = numAffiliation;
		this.etat = etat;
	}


	public String getNumAffiliation() {
		return numAffiliation;
	}
	public void setNumAffiliation(String numAffiliation) {
		this.numAffiliation = numAffiliation;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
}
